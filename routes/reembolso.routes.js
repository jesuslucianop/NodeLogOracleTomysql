const express = require("express");
const router = express.Router();
const {tokenizePayment,} = require('../controllers/reembolso.controllers');

/**
 * @swagger
 * components:
 *   schemas:
 *     reembolso:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The book title
 *         author:
 *           type: string
 *           description: The book author
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 * 
 */

/**
 * @swagger
 * tags:
 *   name: Reembolso
 *   description: the Reembolso apis
 */

/**
 * @swagger
 *  /Reembolso/API/v1/tokenize:
 *   post:
 *     summary: Create a paymentMethod, tokenize a payment method
 *     tags: [Reembolso]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reembolso'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reembolso'
 *       500:
 *         description: Some server error
 */
router.post('/API/v1/tokenize', tokenizePayment);


module.exports = router;