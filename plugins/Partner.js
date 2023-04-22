/// <reference path="../global.d.ts" />
'use strict'
const moment = require('moment');
const { allPartnerDetailsSchema } = require("../custom.swagger.json");

/** @param {import('fastify').FastifyInstance} app */
module.exports = async function (app) {
    app.log.info('Partner plugin loaded');

    app.platformatic.addEntityHooks('partner', {
        save: async (originalSave, options) => {
            const currentTime = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
            options.input.createdOn = currentTime;
            return await originalSave(options)
        }
    })

    // Methods
    const getAllPartnerDetails = async (request, response) => {
        try {
            const { db, sql } = app.platformatic;
            const data = db.query(sql`
                SELECT * FROM partners_v ORDER BY partner_id
            `)
            return data;
        } catch (error) {
            return new Error('Something went wrong!')
        }
    }

    // routes
    app.get(
        "/app-partner-details",
        allPartnerDetailsSchema,
        getAllPartnerDetails
    )
}
