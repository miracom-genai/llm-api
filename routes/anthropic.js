const express = require("express")
const { validAuthorization } = require("../common/validate")
let router = express.Router()

router.use(validAuthorization)

const availableModels = [
    "haiku",
    "sonnet",
    "opus"
]

/**
 * @swagger
 * /api/anthropic/claude/available-models:
 *   get:
 *     tags: [Anthropic]
 *     summary: 사용가능한 LLM Model을 반환
 *     security:
 *       - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/claude/available-models", (req, res) => {
    res.send(availableModels)
})

/**
 * @swagger
 * /api/anthropic/claude/{model}:
 *   post:
 *     tags: [Anthropic]
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
 *           enum: [haiku, sonnet, opus]
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
router.post("/claude/:model", (req, res) => {
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
 * /api/anthropic/claude/{model}/detail:
 *   post:
 *     tags: [Anthropic]
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
 *           enum: [haiku, sonnet, opus]
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
router.post("/claude/:model/detail", (req, res) => {
    const apiKey = req.get("X-API-KEY")
    const model = req.params.model
    const body = req.body
    console.log(`apiKey: ${apiKey}`)
    console.log(`model: ${model}`)
    console.log(`body: ${JSON.stringify(body)}`)

    res.status(200).send()
})

module.exports = router