import { getRepository } from "typeorm";
import { User } from '../entity/User';
import { Request, Response } from "express";

export const getOneUser = async(request: Request, response: Response) => {
    const user = await getRepository(User).findOne((request as any).userId)
    return response.status(200).json(user);
};

export const updateUser = async(request: Request, response: Response) => {
    const {id} = request.params
    const user = await getRepository(User).update(id, request.body)
    if (user.affected == 1)
        return response.status(200).json({message: 'User updated successfully'});
    
    else 
        return response.status(404).json({message: 'User not found'});
    
};
