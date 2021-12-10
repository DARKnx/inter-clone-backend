import { getRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import md5 from 'crypto-js/md5';

import { User } from '../../entity/User'
import { UserSignIn } from './dtos/user.signin.dtos';
import { UserSignUp } from './dtos/user.signup.dtos';
import AppError from '../../shared/error/AppError';
import authConfig from '../../config/auth';



export default class UserService {


async signin(user: UserSignIn){

    const UserRepository = getRepository(User);
    const { email, password } = user;
    const passwordHash = md5(password).toString();
    const existUser = await UserRepository.findOne({where: {email, password: passwordHash}})
    
    if(!existUser){
        throw new AppError('Usuário não encontrado', 401);
      }

      const { secret, expiresIn } = authConfig.jwt;

      const token = sign({
          firstName: existUser.firstName,
          lastName: existUser.lastName,
          accountNumber: existUser.accountNumber,
          accountDigit: existUser.accountDigit,
          wallet: existUser.wallet
      }, secret, {
          subject: existUser.id,
          expiresIn,
      });

      // @ts-expect-error ignora
      delete existUser.password
       
      return {accessToken: token}


}


async signup(user: UserSignUp){

}


}