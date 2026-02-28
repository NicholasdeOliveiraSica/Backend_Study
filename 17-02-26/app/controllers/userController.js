import userModel from "../models/userModel"

const userData = userModel.userData

const userController = {

    index: async (req, res) => {
        res.status(200).json({"users": userData})
    },

    teste: async (req, res) => {
        const data = req.body
        const userName = data.name
        const userAge = data.age
        const userEmail = data.email
        
        res.status(200).send(`Olá, bom dia ${userName}, como você está? Você tem ${userAge} anos de idade e seu email é ${userEmail}`)
    },

}

export default userController