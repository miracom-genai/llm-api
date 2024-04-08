const validAuthorization = (req, res, next) => {
    if (req.get("X-API-KEY")) next()
    else res.status(401).send("X-API-KEY is not founded...")
}

module.exports = {
    validAuthorization
}