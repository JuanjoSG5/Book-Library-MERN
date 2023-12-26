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
});

// Middleware to hash the password before saving
userSchema.pre('save', async function (next) {
  const user = this;
  
  // Hash the password only if it has been modified (or is new)
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
