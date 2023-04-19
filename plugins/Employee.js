/// <reference path="../global.d.ts" />
'use strict'
const swaggerSchema = require('../custom.swagger.json');
/** @param {import('fastify').FastifyInstance} app */
module.exports = async function (app) {
    app.log.info('Plugin loaded');

    // Methods
    const getEmployeeCount = async (request, response) => {
        const employeesCount = await app.platformatic.entities.employee.count();
        return { employeesCount }
    }

    const postExecutives = async (request, response) => {
        const employee = request.body;
        employee.name = employee.name.toUpperCase();
        employee.designation = employee.designation.toUpperCase();
        employee.email = employee.name.split(' ').join('.').toLowerCase().concat('@app.com')
        const result = await app.platformatic.entities.employee.save({
            input: employee
        });
        return result
    }

    const getExecutives = async (request, response) => {
        const data = await app.platformatic.entities.employee.find();
        return data.filter(e => {
            if (e.name == e.name.toUpperCase()) {
                return e
            }
        })
    }

    const getAllEmployeeDetails = async (request, response) => {
        try {
            const { db, sql } = app.platformatic;
            const data = await db.query(sql`
            SELECT * FROM employees_v ORDER BY employee_id 
            `);
            return data;
        } catch (error) {
            return new Error('Something went wrong!')
        }
    }

    app.platformatic.addEntityHooks('employee', {
        save: async (originalSave, options) => {
            options.input.email = options.input.name.split(' ').join('.').toLowerCase().concat('@app.com')
            return await originalSave(options)
        }
    })

    app.get(
        "/employees-count",
        swaggerSchema.employeeCountSchema,
        getEmployeeCount
    );

    app.post(
        "/executive",
        swaggerSchema.executivesPostSchema,
        postExecutives
    );

    app.get(
        "/executive",
        swaggerSchema.executivesGetSchema,
        getExecutives
    )

    app.get(
        "/all-employee-details",
        swaggerSchema.allEmployeeDetailsSchema,
        getAllEmployeeDetails
    )
}
