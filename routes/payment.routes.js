const express = require("express");
const router = express.Router();
const {tokenizePayment, PostConfirmOrder } = require('../controllers/payment.controllers');

/**
 * @swagger
 * components:
 *   schemas:
 *     payment:
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
 *   name: payment
 *   description: the payment apis
 */

/**
 * @swagger
 *  /payments/API/v1/tokenize:
 *   post:
 *     summary: Create a paymentMethod, tokenize a payment method
 *     tags: [payment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/payment'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/payment'
 *       500:
 *         description: Some server error
 */
router.post('/API/v1/tokenize', tokenizePayment);

/**
 * @swagger
 *  /payments/API/v1/confirmOrders:
 *   post:
 *     summary: Create a paymentMethod, tokenize a payment method
 *     tags: [payment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 */
router.post('/API/v1/confirmOrders', PostConfirmOrder);

module.exports = router;