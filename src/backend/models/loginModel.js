

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
email: {
type: String,
required: true,
unique: true
},
password: {
type: String,
required: true
}
});

// Hash password before saving to database
userSchema.pre('save', async function(next) {
try {
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(this.password, salt);
this.password = hashedPassword;
next();
} catch (error) {
next(error);
}
});

// Validate password during login
userSchema.methods.isValidPassword = async function(password) {
try {
return await bcrypt.compare(password, this.password);
} catch (error) {
throw error;
}
};

const User = mongoose.model('mydatabases', userSchema);

module.exports = User;
