const helpers = {

    getUser: function (data, userName, userId) {

        if (!data || !userName || !userId) {
            return false
        }

        const resultado = data.find(user => user.id == userId && user.name.includes(userName)) || null
        return resultado
    },

    createResponse: (statusCode, message, res) => {
        return res.status(statusCode).json({ data: message });
    },

    validateUser: (username, password, email, res) => {

        const regex = /[^a-zA-Z0-9]/; //Regular Expression for special character
        const regexNumber = /\d/
        const regexEmail = /@/; //Regular Expression for at symbol
        const regexUpper = /[A-Z]/

        if (typeof username !== "string" || username.length < 8) {
            return helpers.createResponse(400, "The Username cannot contain only numbers and must be a valid text!", res)
        }

        if (typeof password !== "string" || !regex.test(password) || !regexNumber.test(password) || password.length < 8 || !regexUpper.test(password)) {
            return helpers.createResponse(400, "The password must contain at least one letter, one number, 8 characters, and a special character! \nExample: Saw50812@", res)
        }

        if (typeof email !== "string" && !regexEmail.test(email)) {
            return helpers.createResponse(400, "The email is invalid! \nExample: teste@teste.com", res)
        }

        return true
    }
}

export default helpers;