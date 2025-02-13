import * as dotenv from 'dotenv';

dotenv.config();

const jwtModuleSource = {
  secret: process.env.SECRET_KEY,
  signOptions: { expiresIn: process.env.TIME_AUTH },
};
export default jwtModuleSource;
