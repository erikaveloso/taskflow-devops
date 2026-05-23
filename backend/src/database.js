export const pool = {
  query() {
    throw new Error('Database pool is not configured')
  }
}
