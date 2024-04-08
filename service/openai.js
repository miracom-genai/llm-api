const { ChatOpenAI } = require("@langchain/openai")
const { HumanMessage, SystemMessage, AIMessage } = require("@langchain/core/messages")

const sendChat = async (apiKey, modelName, { messages, systemMessage, temperature, maxLength }) => {
    const llm = new ChatOpenAI({
        openAIApiKey: apiKey,
        modelName,
        temperature,
        maxLength
    })

    const requestMessages = []
    if (systemMessage) requestMessages.push(new SystemMessage(systemMessage))
    for (const reqMessage of messages) {
        if (reqMessage.role.toLowerCase() == 'user') requestMessages.push(new HumanMessage(reqMessage.message))
        if (reqMessage.role.toLowerCase() == 'ai') requestMessages.push(new AIMessage(reqMessage.message))
    }

    try {
        const result = await llm.invoke(requestMessages)
        return result.content
    } catch (e) {
        throw new Error(e.status)
    }
}

module.exports = {
    sendChat
}