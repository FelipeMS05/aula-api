const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserRepository = require ('../repositories/userRepository');
const userRepository = require('../repositories/userRepository');

const SECRET_KEY = 'sua_chave_secreta';

class UserService {
    async register(username, password){
        const hashedPassord = await bcrypt.hash(password, 10);
        const user = await userRepository.createUser({ username, password: hashedPassord})
        return user;
    }
}

module.exports = new UserService();