const { databaseQuery } = require('../database');

const getAll = async () => {
    try {
        const query = `SELECT * FROM rio_webdev`;
        // Return from SELECT query is an array of objects
        const result = await databaseQuery(query);
        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error;
    }
}

const getByName = async (nama) => {
    try {
        // This is not safe, but it's just an example
        // const query = `SELECT * FROM rio_webdev WHERE "nama"='${nama}'`;
        // const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        const query = `SELECT * FROM rio_webdev WHERE name=$1`;
        const result = await databaseQuery(query, [name]);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const getByMailandPhone = async (email,telepon) => {
    try {
        // This is not safe, but it's just an example
        // const query = `SELECT * FROM rio_webdev WHERE "email"='${email}' and "telepon"='${telepon}'`;
        // const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        const query = `SELECT * FROM rio_webdev WHERE name=$1`;
        const result = await databaseQuery(query, [name]);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const patchPraktikanByName = async (nama,angkatan,email,telepon,deskripsi,jenis_kelamin) => {
    try {
        // This is not safe, but it's just an example
        // const query = `UPDATE rio_webdev SET "jenis_kelamin"='${jenis_kelamin}', "angkatan"='${angkatan}', "email"='${email}', "telepon"='${telepon}', "deskripsi"='${deskripsi}' WHERE "nama"='${nama}'`;
        // const result = await databaseQuery(query);

        //This is safer. It uses a parameterized query
        const query = `SELECT * FROM rio_webdev WHERE name=$1`;
        const result = await databaseQuery(query, [name]);
        if (!result) {
            throw new Error('Error updating Data');
        }
        if (result.rowCount === 0) {
            throw new Error('Data not found');
        }
        return {
            message: 'Data updated successfully',
        };

    } catch (error) {
        return error
    }
}

const deleteUrlByMail = async (email) => {
    try {
        // This is not safe, but it's just an example
        // const query = `DELETE FROM rio_webdev WHERE "email"='${email}'`;
        // const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        const query = `DELETE FROM rio_webdev WHERE url=$1`;
        const result = await databaseQuery(query, [url]);

        if (!result) {
            throw new Error('Error deleting Data');
        }
        if (result.rowCount === 0) {
            throw new Error('Data not found');
        }
        return {
            message: 'Data deleted successfully',
        }; 
    } catch (error) {
        return error
    }
}

const create_praktikan = async (nama,angkatan,email,telepon,deskripsi,jenis_kelamin) => {
    try {
        // This is not safe, but it's just an example
        // const query = `insert into rio_webdev values ('${nama}','${jenis_kelamin}','${angkatan}','${email}','${telepon}','${deskripsi}')`;
        // const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        const query = `SELECT * FROM rio_webdev WHERE name=$1`;
        const result = await databaseQuery(query, [name]);
        if (!result) {
            throw new Error('Error updating Data');
        }
        if (result.rowCount === 0) {
            throw new Error('Data not found');
        }
        return {
            message: 'Data updated successfully',
        };

    } catch (error) {
        return error
    }
}

const create_BULK_praktikan = async (POM) => {
    try {
        let BAN = []
        JSON.parse(POM,(a,b)=>{BAN.push(b)})
        for (let a=0;a<(BAN.length-1)/7;a++){
            // This is not safe, but it's just an example
            const query = `insert into rio_webdev values ('${BAN[a*7]}','${BAN[(a*7)+1]}','${BAN[(a*7)+2]}','${BAN[(a*7)+3]}','${BAN[(a*7)+4]}','${BAN[(a*7)+5]}')`;
            const result = await databaseQuery(query);
            if (!result) {
                throw new Error('Error updating Data');
            }
            if (result.rowCount === 0) {
                throw new Error('Data not found');
            }
            // This is safer. It uses a parameterized query
            // const query = `SELECT * FROM rio_webdev WHERE name=$1`;
            // const result = await databaseQuery(query, [name]);    
        }
        return {
            message: 'Data updated successfully',
        };
        
    } catch (error) {
        return error
    }
}
module.exports =  {
    getAll,
    getByName,
    getByMailandPhone,
    patchPraktikanByName,
    deleteUrlByMail,
    create_praktikan,
    create_BULK_praktikan
}