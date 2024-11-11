const { response, request, query } = require('express')

const usuariosGet = (req = request, res = response) => { 

    // const query = req.query 
    const {q , nombre='no name'} = req.query //desestructurando de esta manera podemos obtener solo los valores que queremos,
    // ademas que podemos renombrar por defecto los que no vengan declarados en la url y los estemos esperando.

    res.json({
        asd: 'get API',
        // query
        q,
        nombre
    });  
}

const usuariosPut = (req, res = response) => { 

    const { id } = req.params

    res.json({
        asd: 'put API',
        id
    });   
}

const usuariosPost = (req, res = response) => { 

    // const body = req.body;  de esta manera recibiremos cualquier cosa que me quiera enviar el usuario, 
    const {nombre , edad} = req.body; //encambio de esta manera ignoro cualquier cosa que me envie el usuario que yo no este esperando

    res.json({
        asd: 'post API',
        // body
        nombre,
        edad
    });  
}

const usuariosDelete = (req, res = response) => { 

    res.json({
        asd: 'delete API'
    });   
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}