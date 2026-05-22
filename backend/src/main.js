import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { Module, Controller, Get } from '@nestjs/common'

@Controller()
class AppController {
  @Get()
  getHome() {
    return {
      message: 'Backend TaskFlow funcionando'
    }
  }
}

@Module({
  controllers: [AppController]
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({
    origin: '*'
  })

  await app.listen(8080, '0.0.0.0')
  console.log('Backend rodando na porta 8080')
}

bootstrap()