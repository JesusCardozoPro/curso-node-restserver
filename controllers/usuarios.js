const { response, request } = require('express');



const usuariosGet = (req = request, res = response) => {
    const {q, nombre = "no name", apikey, page ='1', limit} = req.query;
    res.json({
        msg: 'get API - controllers',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPost = (req = request, res = response) => {
    const {nombre, edad} = req.body;
    res.json({
        msg: 'post API - controllers',
        nombre,
        edad
    });
}
const usuariosPut = (req = request, res = response) => {
    const { id } = req.params
    res.json({
        msg: 'put API - controllers',
        id,
        lol: 'yeah'
    });
}
const usuariosPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch API - controllers'
    });
}
const usuariosDelete = (req = request, res = response) => {
    res.json({
        msg: 'delete API - controllers'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}