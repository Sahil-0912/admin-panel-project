const bcrypt = require('bcryptjs')

exports.plainToHash = async (password) => {
    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(password, salt)
    console.log(hashpassword);
    return hashpassword
}

exports.HashToPlain = async (password,hashpassword) => {
    const output = await bcrypt.compare(password,hashpassword)
    return output
}