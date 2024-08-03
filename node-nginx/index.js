const express = require("express")
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb"
})

const createPeopleSqlStatement =
 `INSERT INTO people(nome) VALUES (?)`;
const getAllNameInPeople = `SELECT nome FROM people`;

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const name = req.query['name'] ||'Wesley Willians'

    connection.query(createPeopleSqlStatement, [name])

    const html = ['<h1>Full Cycle Rocks!</h1>', '<ul>']
    connection.query(getAllNameInPeople, (err, result) => {
        console.log(result)

        if (Array.isArray(result)) {
            for(const row of result) {
                console.log(row.nome)
                html.push(`<li>${row.nome}</li>`)
            }
        }

        html.push('</ul>')
        return res.send(html.join('\n'));
    })
})

app.listen(port, () => {
    console.log('rodando na porta 3000')
})