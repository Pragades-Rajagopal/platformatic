/// <reference path="./global.d.ts" />
'use strict'

/** @param {import('fastify').FastifyInstance} app */
module.exports = async function (app) {
    app.get(
        "/movies-count",
        {
            schema: {
                response: {
                    200: {
                        type: "object",
                        properties: {
                            moviesCount: { type: "integer" }
                        }
                    }
                }
            }
        },
        async (request, response) => {
            const moviesCount = await app.platformatic.entities.employee.count();
            return { moviesCount }
        });

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
    )
}
