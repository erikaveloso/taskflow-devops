import { HttpException, HttpStatus } from '@nestjs/common'
import {
  findAllTasks,
  findTaskById,
  createTask,
  updateTask,
  toggleTask,
  deleteTask
} from '../src/tasks/tasks.service'
import { pool } from '../src/database'

jest.mock('../src/database', () => ({
  pool: {
    query: jest.fn()
  }
}))

describe('Tasks Service', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('findAllTasks', () => {
    it('deve retornar todas as tarefas', async () => {
      const mockTasks = [
        {
          id: 1,
          title: 'Task 1',
          description: 'Descrição 1',
          completed: false,
          created_at: new Date()
        },
        {
          id: 2,
          title: 'Task 2',
          description: 'Descrição 2',
          completed: true,
          created_at: new Date()
        }
      ]

      pool.query.mockResolvedValue({
        rows: mockTasks
      })

      const result = await findAllTasks()

      expect(pool.query).toHaveBeenCalledTimes(1)

      expect(result).toEqual(mockTasks)
    })
  })

  describe('findTaskById', () => {
    it('deve retornar uma tarefa pelo id', async () => {
      const mockTask = {
        id: 1,
        title: 'Task Test',
        description: 'Descrição teste',
        completed: false,
        created_at: new Date()
      }

      pool.query.mockResolvedValue({
        rows: [mockTask]
      })

      const result = await findTaskById(1)

      expect(pool.query).toHaveBeenCalledWith(
        expect.stringContaining('WHERE id = $1'),
        [1]
      )

      expect(result).toEqual(mockTask)
    })

    it('deve lançar erro quando tarefa não existir', async () => {
      pool.query.mockResolvedValue({
        rows: []
      })

      await expect(findTaskById(999)).rejects.toThrow(
        new HttpException(
          'Tarefa não encontrada',
          HttpStatus.NOT_FOUND
        )
      )
    })
  })

  describe('createTask', () => {
    it('deve criar uma tarefa com sucesso', async () => {
      const mockCreatedTask = {
        id: 1,
        title: 'Nova tarefa',
        description: 'Descrição',
        completed: false,
        created_at: new Date()
      }

      pool.query.mockResolvedValue({
        rows: [mockCreatedTask]
      })

      const payload = {
        title: 'Nova tarefa',
        description: 'Descrição'
      }

      const result = await createTask(payload)

      expect(pool.query).toHaveBeenCalledWith(
        expect.stringContaining('INSERT INTO tasks'),
        ['Nova tarefa', 'Descrição', false]
      )

      expect(result).toEqual(mockCreatedTask)
    })

    it('deve criar tarefa com completed true', async () => {
      const mockCreatedTask = {
        id: 1,
        title: 'Task concluída',
        description: null,
        completed: true,
        created_at: new Date()
      }

      pool.query.mockResolvedValue({
        rows: [mockCreatedTask]
      })

      const payload = {
        title: 'Task concluída',
        completed: true
      }

      const result = await createTask(payload)

      expect(pool.query).toHaveBeenCalledWith(
        expect.any(String),
        ['Task concluída', null, true]
      )

      expect(result.completed).toBe(true)
    })

    it('deve remover espaços do título', async () => {
      const mockCreatedTask = {
        id: 1,
        title: 'Task limpa',
        description: null,
        completed: false,
        created_at: new Date()
      }

      pool.query.mockResolvedValue({
        rows: [mockCreatedTask]
      })

      await createTask({
        title: '   Task limpa   '
      })

      expect(pool.query).toHaveBeenCalledWith(
        expect.any(String),
        ['Task limpa', null, false]
      )
    })

    it('deve lançar erro quando título não for enviado', async () => {
      await expect(
        createTask({
          description: 'Sem título'
        })
      ).rejects.toThrow(
        new HttpException(
          'O título é obrigatório',
          HttpStatus.BAD_REQUEST
        )
      )
    })

    it('deve lançar erro quando título estiver vazio', async () => {
      await expect(
        createTask({
          title: '    '
        })
      ).rejects.toThrow(
        new HttpException(
          'O título é obrigatório',
          HttpStatus.BAD_REQUEST
        )
      )
    })
  })

  describe('updateTask', () => {
    it('deve atualizar uma tarefa', async () => {
      pool.query
        .mockResolvedValueOnce({
          rows: [{ id: 1 }]
        })
        .mockResolvedValueOnce({
          rows: [
            {
              id: 1,
              title: 'Atualizada',
              description: 'Nova descrição',
              completed: true,
            },
          ],
        })

      const result = await updateTask(1, {
        title: 'Atualizada',
        description: 'Nova descrição',
        completed: true,
      })

      expect(result.title).toBe('Atualizada')
      expect(result.completed).toBe(true)
    })

    it('deve lançar erro ao atualizar tarefa inexistente', async () => {
      pool.query.mockResolvedValue({
        rows: [],
      })

      await expect(
        updateTask(999, {
          title: 'Teste',
        }),
      ).rejects.toThrow(
        'Tarefa não encontrada',
      )
    })
  })

  describe('toggleTask', () => {
    it('deve alternar completed da tarefa', async () => {
      pool.query.mockResolvedValue({
        rows: [
          {
            id: 1,
            completed: true,
          },
        ],
      })

      const result = await toggleTask(1)

      expect(result.completed).toBe(true)
    })

    it('deve lançar erro ao alternar tarefa inexistente', async () => {
      pool.query.mockResolvedValue({
        rows: [],
      })

      await expect(
        toggleTask(999),
      ).rejects.toThrow(
        'Tarefa não encontrada',
      )
    })
  })
  describe('deleteTask', () => {
    it('deve remover tarefa', async () => {
      pool.query.mockResolvedValue({
        rows: [{ id: 1 }],
      })

      const result = await deleteTask(1)

      expect(result).toEqual({
        message: 'Tarefa removida com sucesso',
      })
    })

    it('deve lançar erro ao remover tarefa inexistente', async () => {
      pool.query.mockResolvedValue({
        rows: [],
      })

      await expect(
        deleteTask(999),
      ).rejects.toThrow(
        'Tarefa não encontrada',
      )
    })
  })
})
