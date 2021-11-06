const jwt = require("jsonwebtoken");

module.exports={

    verificartoken: async (req,res,next,dato)=> {

        const token = dato;
        if (!token) {
            return res.status(403).send("Se requiere un token para autenticar");
        }
    
        try {
            const decoded = jwt.verify(token, 'laclaveerestu');
            req.user = decoded;
        } catch (err) {
            return res.status(401).send("Token Chafa");
        }
        return next(); 
    }
};



