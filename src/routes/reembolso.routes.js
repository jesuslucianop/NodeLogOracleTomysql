const express = require("express");
const router = express.Router();
const {obtenerRequestReembolsoAgil,} = require('../controllers/reembolso.controllers');

/**
 * @swagger
 * components:
 *   schemas:
 *     reembolso:
 *       type: object
 *       required:

 *       properties:
 *  
 *       example:
 */

/**
 * @swagger
 * tags:
 *   name: reembolso
 *   description: the Reembolso apis
 */

/**
 * @swagger
 * /reembolso/API/v1/reembolsoLog/:
 *   get:
 *     summary: Get the waller by name
 *     tags: [reembolso]
 *     responses:
 *       200:
 *         description: The wallet client
 *         contens:
 *           application/json:
 *             
 *       404:
 *         description: The wallet was not found
 */
router.get('/API/v1/reembolsoLog', obtenerRequestReembolsoAgil);


module.exports = router;