import { getRepository } from "typeorm";
import { User } from '../entity/User';
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken"
import {secret} from "../config"

const generateToken = (params = {}) => jwt.sign(params, secret, {expiresIn: 986400,});

export const authUser = async(request: Request, response: Response) => {
    
    const {username, password} = request.body;
    
    if(!username) return;
    if(!password) return;
    
    const user = await getRepository(User).findOne({where: {username, password}});
    if(!user)
        return response.status(400).json({status:400, msg: "Usuário não encontrado"})

    user.password = undefined;
    return response.status(200).json({data: user, token: generateToken({id: user.id})});
};

export const saveUser = async(request: Request, response: Response) => {
    
    const user = request.body;
    if (await getRepository(User).findOne({ where: { email: user.email} })) 
        return response.status(403).json({msg: 'Email já cadastrado'});
    const savedUser = await getRepository(User).save(request.body);
    savedUser.senha = undefined;
    return response.status(201).json({data: savedUser, token: generateToken({id: savedUser.id})});
};