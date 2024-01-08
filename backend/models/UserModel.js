import { Schema, model } from 'mongoose';
import { hash } from 'bcrypt';

const userSchema = new Schema({
 username: {
   type: String,
   required: true,
   unique: true,
 },
 email: {
   type: String,
   required: true,
   unique: true,
 },
 password: {
   type: String,
   required: true,
 },
 admin: {
   type: Boolean,
   default: false,
 },
});

userSchema.pre('save', async function (next) {
 const user = this;
 
 if (!user.isModified('password')) return next();

 try {
   const hashedPassword = await hash(user.password, 10);
   user.password = hashedPassword;
   next();
 } catch (error) {
   return next(error);
 }
});

const UserEntity = model('User', userSchema);

export default UserEntity;