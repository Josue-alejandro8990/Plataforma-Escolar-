const profes = require('../modelos/profesor');
const alumno = require('../modelos/alumno');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const url = require("url");
const validar = require('../middleware/auth');
module.exports = {

    logProf: async (req, res) => {
        try {
            const prof = await profes.findOne({
                correo: req.body.user
            });
            if (prof && (await bcrypt.compare(req.body.password, prof.password))) {
                const user = {
                    id: prof._id.toString(),
                    correo: prof.correo,
                    nombre: prof.nombres
                }

                const token = jwt.sign({
                    user: user
                }, 'clavesecreta');
                prof.token = token;
                res.status(200).render('CursosCatedratico.html', {
                    data: prof
                });
                return;
            }

            res.status(400).redirect(url.format({
                pathname: '/',
                query: {
                    'data': 'ERROR'
                }
            }));

        } catch (err) {
            res.send(err);

        }
    },
    registraralum: async (req, res) => {
        try {
            const {
                nombre,
                apellidos,
                carnet,
                email,
                password
            } = req.body;
            //chequeamos que todo venga
            if (!(email && password && nombre &&carnet&&apellidos)) {

                return res.status(409).send("Todos los campos son requeridos");
            }
            //chequeamos si el usuario ya existencia
            const oldUser = await alumno.findOne({
                email
            });
            if (oldUser) {
                return res.status(409).send("Este cuate ya existe en la db");
            }
            //encriptamos el password del usuario para
            passwordEncriptado = await bcrypt.hash(password, 10);
            //crea el token 
            const jsontoken = jwt.sign({
                    email,
                    passwordEncriptado
                },
                 'laclaveerestu',{
                    expiresIn: "2h",
                }
            );

            //creamos el usuario en nuestra base de datos para
            var nuevo = new alumno({
                id_estudiante: carnet,
                id_bot: "050990905950",
                nombres: nombre,
                apellidos: apellidos,
                correo: email.toLowerCase(),
                seccion: "B",
                password: passwordEncriptado,
                token: jsontoken
            })
            await nuevo.save();
            res.status(200).render('loginvista.html');
        } catch (err) {
            console.log(`hay un clavo en el registro ${err}`)
        }
    },
    logAlum: async (req, res) => {
        try {
            const {
                email,
                password,
                tipo
            } = req.body;
            //chequeamos que todo venga
                if (!(email && password && tipo )) {
                    res.status(400).send('todos los datos son necesarios');
                    return;
                }
                //verificamos en la base de datos si el alumno esta registrado
                const users = await alumno.findOne({
                    correo: email
                });
                //comparamos la contraseña ingresada con la contraseña de la base de dato
                    if (users && (await bcrypt.compare(password, users.password))) {
                        res.status(200).render('CursosAlumno.html',{
                            nombre:users.nombres+users.apellidos,
                            carnet:users.id_estudiante
                        });
                        return;
                    }
                    res.status(400).send('El usuario no esta registrado');   
        } catch (err) {
            res.send(err);

        }
    }

}