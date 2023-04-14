/// <reference path="./global.d.ts" />
'use strict'

/** @param {import('fastify').FastifyInstance} app */
module.exports = async function (app) {
    app.log.info('Plugin loaded');
    app.get(
        "/employees-count",
        {
            schema: {
                response: {
                    200: {
                        type: "object",
                        properties: {
                            employeesCount: { type: "integer" }
                        }
                    }
                }
            }
        },
        async (request, response) => {
            const employeesCount = await app.platformatic.entities.employee.count();
            return { employeesCount }
        }
    );

    app.post(
        "/executives",
        {
            schema: {
                body: {
                    $ref: "Employee"
                },
                response: {
                    200: {
                        $ref: "Employee"
                    }
                }
            }
        },
        async (request, response) => {
            const employee = request.body;
            employee.name = employee.name.toUpperCase();
            employee.designation = employee.designation.toUpperCase();
            const result = await app.platformatic.entities.employee.save({
                input: employee
            });
            return result
        }
    );

    app.get(
        "/all-employee-details",
        {
            schema: {
                response: {
                    200: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                employee_id: { type: "integer" },
                                name: { type: "string" },
                                email: { type: "string" },
                                designation: { type: "string" },
                                experience: { type: "integer" },
                                address: { type: "string" },
                                age: { type: "integer" },
                                rating: { type: "integer" },
                            }
                        }
                    }
                }
            }
        },
        async (request, response) => {
            const { db, sql } = app.platformatic;
            const data = await db.query(sql`
                SELECT * FROM employees_v ORDER BY employee_id 
            `);
            return data;
        }
    )
}
