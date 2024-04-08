const express = require("express")
const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUI = require("swagger-ui-express")
const openai = require("./routes/openai")
const anthropic = require("./routes/anthropic")

const port = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/openai", openai)
app.use("/api/anthropic", anthropic)

const swaggerOptions = {
    swaggerDefinition: {
        openai: "3.0.0",
        info: {
            title: "Miracom LLM API Service",
            version: "1.0.0",
            description: "Miracom LLM API Service"
        },
        components: {
            securitySchemes: {
                ApiKeyAuth: {
                    type: "apiKey",
                    name: "X-API_KEY",
                    in: "header"
                }
            }
        }
    },
    apis: ["./routes/*.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.get("/", (req, res) => {
    res.redirect("/api-docs")
})

app.listen(PORT, () => console.log(`listening on ${PORT}`))