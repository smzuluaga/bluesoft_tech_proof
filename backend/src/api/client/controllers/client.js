'use strict';

/**
 * client controller
 */

const tipoGrupo = require('../../client/controllers/client');


const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::client.client', {
    login : async  (ctx) => {

        const body = ctx.request.body;
        console.log(body);

        const userFound = await strapi.query('api::client.client')
        .findOne({where :{email : body.email, clave: body.clave}})
            // populate : ['cuentas']
            // });

            console.log(userFound);

        return userFound
    },
});
