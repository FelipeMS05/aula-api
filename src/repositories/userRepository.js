const User = require('../models/user');

class UserRepository {
    async createUser(user){
        return await User.create(user);
    }

    async findByUserName(username){
        return await User.findOne({ where: { username }})
    }
}

module.exports = new UserRepository();