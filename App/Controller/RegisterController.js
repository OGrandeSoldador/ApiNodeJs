import helpers from "../helpers/Helpers.js"

const RegisterUser = {
    async getRegistersUsers(req, res) {
        const { user, password, email } = req.body

        const isUserValid = helpers.validateUser(user, password, email, res)

        if (isUserValid === true) {
            return helpers.createResponse(201, `User ${user} createad with success!`, res)
        }
    }
}

export default RegisterUser