import users from '../../Datas.js'
import helpers from '../helpers/Helpers.js';
import getGithubRequest from '../Services/UserService.js';


const gitHubController = {
    async getUser(req, res) {
        const { username, id } = req.body;

        if (username == false) {
            return helpers.createResponse(401, "Usuário não pode ser vazio!", res)
        }

        if (id == false) {
            return helpers.createResponse(401, "Id do usuário não pode ser vazio!", res)
        }

        const validUser = helpers.getUser(users, username, id)

        if (!validUser) {
            return helpers.createResponse(401, "Usuário não encontrado!", res)
        }

        try {
            const userData = await getGithubRequest.getUser(validUser.apiKey);
            res.json({ userData });
        } catch (error) {
            console.error('Erro ao obter dados:', error);
        }
    }
};

export default gitHubController;
