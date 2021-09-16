require('dotenv').config()
// const db = require('./db')
const inquirer = require('inquirer');
const department = require('./lib/department');
const employee = require('./lib/employee');
const role = require('./lib/role');
const connection = require('./connection')

const PORT = process.env.PORT || 3001;


async function main() {
    // get the client
    const mysql = require('mysql2/promise');
    // create the connection
    try {
        // const connection = await mysql.createConnection({ host: process.env.DB_PASSWORD, user: process.env.DB_USER, database: process.env.DB_NAME });
        const answers = await inquirer
            .prompt([
                {
                    message: "What would you like to do?",
                    name: "action",
                    type: "list",
                    choices: [
                        'View all departments',
                        'View all roles',
                        'View all employees',
                        'Add a department',
                        'Add a role',
                        'Add an employee',
                        'Update an employee role',
                        'Exit'
                    ]

                },

            ]);

        if (answers.action === 'view all departments') {
            const [rows, fields] = await connection.execute('SELECT * FROM `department`');
            console.table(rows);
        }
        if (answers.action === 'View all roles'){
            const [rows, fields] = await connection.execute('SELECT * FROM `role`');
            console.table(rows);
        }
        if (answers.action === 'View all employees'){
            const [rows, fields] = await connection.execute('SELECT * FROM `employee`');
            console.table(rows);
        }
        if (answers.action === 'Add a department'){
            const [rows, fields] = await connection.execute('SELECT * FROM `department`');
            console.table(rows);
        }
        if (answers.action === 'Add a role'){
            const [rows, fields] = await connection.execute('SELECT * FROM `role`');
            console.table(rows);
        }
        if (answers.action === 'Add an employee'){
            const [rows, fields] = await connection.execute('INSERT INTO `employee`');
            console.table(rows);
            addEmployee();
        }
        if (answers.action === 'Update an employee role'){
            const [rows, fields] = await connection.execute('SELECT * FROM `role`');
            console.table(rows);
        }
        if (answers.action === 'Done'){
            const [rows, fields] = await connection.execute(' ');
            console.table(rows);
        }
    } catch (error) {
        console.error(error);
    }
};



main();

function addEmployee (){
    db.query("SELECT * FROM employee", function (req, res){
        if (err){
            throw(err)
        }
    })
    inquirer.prompt([
        {
            type:"input",
            name:"firstName",
            message:"What is the first name of the employee you would like to add?",
        },
        {
            type:"input",
            name:"lastName",
            message:"What is the last name of the employee you would like to add?",
        },

        
    ]);
};