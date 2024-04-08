const express = require("express")
const { validAuthorization } = require("../common/validate")
let router = express.Router()

router.use(validAuthorization)

const availableModels = [
    "gpt-3.5-turbo",
    "gpt-3.5-turbo-0125",
    "gpt-3.5-turbo-16k",
    "gpt-4",
    "gpt-4-turbo-preview"
]

/**
 * @swagger
 * /api/openai/gpt/available-models:
 *   get:
 *     tags: [OpenAI]
 *     summary: 사용가능한 LLM Model을 반환
 *     security:
 *       - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/gpt/available-models", (req, res) => {
    res.send(availableModels)
})

/**
 * @swagger
 * /api/openai/gpt/{model}:
 *   post:
 *     tags: [OpenAI]
 *     summary: Hello
 *     description: |
 *       __Hello World!!!__
 *     consume: x-www-form-urlencoded
 *     parameters:
 *       - name: model
 *         in: path
 *         description: desc...
 *         required: true
 *         schema:
 *           type: string
 *           enum: [gpt-3.5-turbo, gpt-3.5-turbo-0125, gpt-3.5-turbo-16k, gpt-4, gpt-4-turbo-preview]
 *       - name: message
 *         in: query
 *         description: desc...
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/gpt/:model", (req, res) => {
    const apiKey = req.get("X-API-KEY")
    const model = req.params.model
    const message = req.query.message
    console.log(`apiKey: ${apiKey}`)
    console.log(`model: ${model}`)
    console.log(`message: ${message}`)

    res.status(200).send()
})

/**
 * @swagger
 * /api/openai/gpt/{model}/detail:
 *   post:
 *     tags: [OpenAI]
 *     summary: Hello
 *     description: |
 *       __Hello World!!!!__
 *     parameters:
 *       - name: model
 *         in: path
 *         description: desc...
 *         required: true
 *         schema:
 *           type: string
 *           enum: [gpt-3.5-turbo, gpt-3.5-turbo-0125, gpt-3.5-turbo-16k, gpt-4, gpt-4-turbo-preview]
 *     requestBody:
 *       x-name: body
 *       content:
 *         application/json:
 *           schema:
 *             required:
 *             - messages
 *             properties:
 *               messages:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     role:
 *                       type: string
 *                     message:
 *                       type: string
 *               systemMessage:
 *                 type: string
 *               temperature:
 *                 type: number
 *                 default: 1
 *                 minimum: 0
 *                 maximum: 2
 *               maxLength:
 *                 type: number
 *                 default: 256
 *     security:
 *       - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/gpt/:model/detail", (req, res) => {
    const apiKey = req.get("X-API-KEY")
    const model = req.params.model
    const body = req.body
    console.log(`apiKey: ${apiKey}`)
    console.log(`model: ${model}`)
    console.log(`body: ${JSON.stringify(body)}`)

    res.status(200).send()
})

module.exports = router