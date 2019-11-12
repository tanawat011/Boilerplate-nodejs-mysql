import './env.config'
import mysql from 'mysql'

const connection = mysql.createConnection({
  host: global.env.host,
  user: global.env.db_user,
  password: global.env.db_pass,
  database: global.env.db_name,
  port: global.env.db_port,
  debug:
    global.env.db_debug ? ['ComQueryPacket', 'RowDataPacket'] : false
})

// connection.connect(error => {
//   if (error) throw error
//   console.log('Successfully connected to the database.')
// })

export default connection
