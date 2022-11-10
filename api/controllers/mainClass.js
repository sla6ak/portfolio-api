const mainInfoDB = require('../db/mainInfoDB');
const path = require('path');
const fs = require('fs/promises');
const Jimp = require('jimp');

const avatarDir = path.join(__dirname, '..', 'photo');

class Transaction {
    async getAllInfo(req, res, next) {
        try {
            const mainInfo = await mainInfoDB.listInfo();
            return res.status(200).json(mainInfo);
        } catch (error) {
            res.status(404).json({ message: `Main info not found`, response: null });
        }
    }

    async addNewAvatar(req, res, next) {
        const { path: tempDir, originalname } = req.file;
        const resultPath = path.join(avatarDir, originalname);
        try {
            const findeImage = await Jimp.read(tempDir);
            findeImage.quality(60).resize(512, 512).write(resultPath);
            await fs.unlink(tempDir);
            await mainInfoDB.updateAva(originalname);
            return res.status(200).json({ message: 'status 200', response: originalname });
        } catch (error) {
            res.status(404).json({ message: `Awatar not add`, response: null });
        }
    }

    async updateInfo(req, res, next) {
        try {
            const dataInfo = await mainInfoDB.updateInfo(req.body);
            if (!dataInfo) {
                return res.status(400).json({ message: `Info not update`, response: null });
            }
            return res.status(200).json({ message: 'status 200', response: dataInfo });
        } catch (error) {
            res.status(404).json({ message: `Main Info not update`, response: null });
        }
    }
}

module.exports = new Transaction();
