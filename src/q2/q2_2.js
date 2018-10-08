const { promisify } = require('util')
const bcrypt = require('bcrypt')
const mysql = require('mysql')

function generateHash(rawPassword) {
  return bcrypt.hashSync(rawPassword, (process.env.PASSWORD_SALT || 10))
}

const connection = mysql.createConnection({
  host: 'localhost',
  password: 'root',
  user: 'root',
  database: 'hotmilhas_test'
})

async function login(username, password) {
  const queryFn = promisify(connection.query).bind(connection);
  const rows = await queryFn('SELECT * FROM users WHERE username = ?', [username])
  const user = JSON.parse(JSON.stringify(rows)).shift() || null

  if (null === user) {
    throw new Error('Invalid data')
  }

  if (! bcrypt.compareSync(password, user.password)) {
    throw new Error('Invalid data')
  }

  return user;
}

login('fulano', '12345').then(rows => console.log(rows)).catch(err => console.log(err))
