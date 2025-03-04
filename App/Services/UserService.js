import axios from 'axios';

const axiosApp = axios;

const url = `https://api.github.com/user`;

const getGithubRequest = {
    getUser: async function (token) {

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        // Requisição GET para o GitHub
        try {
            const responde = await axiosApp.get(url, config);
            return responde.data;
        }
        catch (error) {
            console.error('Erro na requisição para o GitHub:', error);
            throw error;
        };
    }
};

export default getGithubRequest;

// class Player { //Endereço fixo
//     constructor(name, health = 100, position) {
//         this.name = name
//         this.health = health
//         this.position = [1, 2, 3]
//     }

//     attack(player) {
//         player.health = 98
//         console.log("2 de dano Causado ao player", player.name);
//     }

//     curar() {
//         console.log("Curando..", this.health)
//         this.health = 100
//         console.log("Curando..", this.health)
//     }

//     mostraHp() {
//         console.log(this.name, " ", this.health);
//     }

//     mudaposition() {
//         const newPos = this.position = this.position.sort(() => Math.random() - 0.5)
//         console.log("Nova posição: ", newPos)
//     }

// }

// const marquim = new Player("snake1") //B1288BWASC9ASCNMBB9C8##C888A8

// const jefim = new Player("snake2") //C888A812541CAS8Cc777##VVVBBB

// marquim.attack(jefim)
// marquim.mudaposition()
// console.log(marquim.position)
// marquim.mudaposition()

// jefim.curar()
