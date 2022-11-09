const mainInfoDB = require('../db/mainInfoDB');
const path = require('path');
const fs = require('fs/promises');
const Jimp = require('jimp');

const avatarDir = path.join(__dirname, '..', 'photo');
// const tempDir = path.join(__dirname, '..', 'tmp');

class Transaction {
    async getAllInfo(req, res, next) {
        try {
            const mainInfo = await mainInfoDB.listInfo();
            return res.status(200).json(mainInfo);
        } catch (error) {
            res.status(404).json({ message: `Work not found`, response: null });
        }
    }

    async addNewAvatar(req, res, next) {
        const { path: tempDir, originalname } = req.file;
        const resultPath = path.join(avatarDir, `${req.userId}_${originalname}`);
        try {
            const findeImage = await Jimp.read(tempDir);
            findeImage.quality(60).write(resultPath);
            await fs.unlink(tempDir);
            // const publicPath = path.join('avatars', originalname);
            const resultInfo = await mainInfoDB.updateAva(originalname);

            return res.status(200).json({ message: 'status 200', response: resultInfo.img });
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
