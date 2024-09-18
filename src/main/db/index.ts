import bestSqlite from 'best-sqlite3'

export const initDB = async (): Promise<any> => {
  try {
    const db = await bestSqlite.connect('./database.sqlite')
    await createTables(db)
    console.log('Connected to database: ', db.tables)
    return db
  } catch (error) {
    console.error(error)
  }
}

async function createTables(db: any): Promise<void> {
  await db.run(`CREATE TABLE IF NOT EXISTS example (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
  )`)
}
