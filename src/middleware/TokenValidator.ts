import * as jwt from "jsonwebtoken"
import {secret} from "../config"

export default function tokenValidator(req, res, next) {

    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).send({error: 'No token provided', code:'a01'});

    const parts: string[] = authHeader.split(' ');

    if(parts.length !== 2)
        return res.status(401).send({error: 'Token error', code:'a02'});

    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({error: 'Token malformatted', code:'a03'});

    jwt.verify(token, secret, (err: Error, decoded: any) => {

        if(err) 
            return res.status(401).send({error: 'Token invalid', code:'a04'});

        req.userId = decoded.id;
        return next();

    });

};