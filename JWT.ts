import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;

export const createTokens = (user: any) => {
    const accessToken = sign({ username: user.username, id: user.userId }, "jwtsecretplschange");
    return accessToken;
};

export const validateToken = (req:any, res:any, next:any) => {
    const accessToken = req.cookies["access-token"];
    
    if (!accessToken) return res.status(400).json({message: "User is not Authenticated!"});

    try {
        const validToken = verify(accessToken, "jwtsecretplschange")
        if (validToken) {
            req.authenticated = true;
            console.log(req);
            
            return next();
        }
    } catch (error: any) {
        return res.status(400).json({message: error.message})   
    }
};