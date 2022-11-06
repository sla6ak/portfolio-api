const mainInfoDB = require('../db/mainInfoDB');
const path = require('path');
const fs = require('fs/promises');
const Jimp = require('jimp');

const avatarDir = path.join(__dirname, '..', 'photo');

class Transaction {
    async getAllInfo(req, res, next) {
        try {
            const mainInfo = await mainInfoDB.listWork();
            return res.status(200).json(mainInfo);
        } catch (error) {
            res.status(404).json({ message: `Work not found`, response: null });
        }
    }

    async addNewAvatar(req, res, next) {
        const { path: tempDir } = req.file;
        const resultPath = path.join(avatarDir, `photoName`);
        try {
            const findeImage = await Jimp.read(tempDir);
            findeImage.resize(250, 250).quality(60).write(resultPath);
            await fs.unlink(tempDir);

            const publicPath = path.join('avatars', `photoName`);

            return res.status(200).json({ message: 'status 200', response: publicPath });
        } catch (error) {
            res.status(404).json({ message: `Work not add`, response: null });
        }
    }

    async updateInfo(req, res, next) {
        try {
            return res.status(200).json();
        } catch (error) {
            res.status(404).json({ message: `Work not update`, response: null });
        }
    }
}

module.exports = new Transaction();
