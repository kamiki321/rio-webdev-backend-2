const { param, body, query, check } = require('express-validator');
const { validator } = require('./validator');


const getByName  = [
    body('nama').isLength({min: 8}),
    validator
]

const getByMailandPhone  = [
    body('email').isEmail(),
    body('telepon').isLength(12),
    validator
]

const patchPraktikanByName  = [
    body('nama').isLength({min: 8}),
    body('jenis_kelamin').isIn(['P','L']),
    body('angkatan').custom((value)=>value>2018 ? true:false),
    body('email').isEmail(),
    body('telepon').isLength(12),
    body('deskripsi').custom((value)=>value=='' ? false:true),
    validator
]

const deleteUrlByMail  = [
    body('email').isEmail(),
    validator
]

const create_praktikan  = [
    body('nama').isLength({min: 8}),
    body('jenis_kelamin').isIn(['P','L']),
    body('angkatan').custom((value)=>value>2018 ? true:false),
    body('email').isEmail(),
    body('telepon').isLength(12),
    body('deskripsi').custom((value)=>value=='' ? false:true),
    validator
]

const create_BULK_praktikan  = [
    body('*.nama').isLength({min: 8}),
    body('*.jenis_kelamin').isIn(['P','L']),
    body('*.angkatan').custom((value)=>value>2018 ? true:false),
    body('*.email').isEmail(),
    body('*.telepon').isLength(12),
    body('*.deskripsi').custom((value)=>value=='' ? false:true),
    validator
]

module.exports = {
    getByName,
    getByMailandPhone,
    patchPraktikanByName,
    deleteUrlByMail,
    create_praktikan,
    create_BULK_praktikan,
}