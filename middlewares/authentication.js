//rutas que serian privadas

function authentication(req, res, next){
    //agregar logica de autentication de ruta
    next()
}

module.exports = authentication