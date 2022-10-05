const { urlServices } = require('../services');
const { responseHelper } = require('../helper');

const getAll = async (req, res) => {
    try {

        const urls = await urlServices.getAll();
        if(urls instanceof Error) {
            throw new Error(urls);
        } 
        res.status(responseHelper.status.success).json(urls);
        
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const getByName = async (req, res) => {
    try {
        const { nama } = req.body;
        const url = await urlServices.getByName(nama);
        
        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const getByMailandPhone = async (req, res) => {
    try {
        const { email,telepon } = req.body;
        const url = await urlServices.getByMailandPhone(email,telepon);
        
        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const patchPraktikanByName = async (req, res) => {
    try {
        const { nama,angkatan,email,telepon,deskripsi } = req.body;
        const url = await urlServices.patchPraktikanByName(nama,angkatan,email,telepon,deskripsi,req.body['jenis_kelamin']);

        if(url instanceof Error) {
            throw new Error(url);
        }

        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const deleteUrlByMail = async (req, res) => {
    try {
        const { email } = req.body;
        const url = await urlServices.deleteUrlByMail(email);
        
        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const create_praktikan = async (req, res) => {
    try {
        const { nama,angkatan,email,telepon,deskripsi } = req.body;
        const url = await urlServices.create_praktikan(nama,angkatan,email,telepon,deskripsi,req.body['jenis_kelamin']);
        
        if(url instanceof Error) {
            throw new Error(url);
        }

        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const create_BULK_praktikan = async (req, res) => {
    try {
        const url = await urlServices.create_BULK_praktikan(JSON.stringify(req.body));
        
        if(url instanceof Error) {
            throw new Error(url);
        }

        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

module.exports = {
    getAll,
    getByName,
    getByMailandPhone,
    patchPraktikanByName,
    deleteUrlByMail,
    create_praktikan,
    create_BULK_praktikan,
}
