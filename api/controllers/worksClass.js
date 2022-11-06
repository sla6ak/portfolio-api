const worksDB = require('../db/workDB');

class Transaction {
    async getAllWork(req, res, next) {
        try {
            const dataW = await worksDB.listWork();
            return res.status(200).json(dataW);
        } catch (error) {
            res.status(404).json({ message: `Work not found`, response: null });
        }
    }

    async addNewWork(req, res, next) {
        try {
            const dataW = await worksDB.addNewWork(req.body);
            return res.status(201).json(dataW);
        } catch (error) {
            res.status(404).json({ message: `Work not add`, response: null });
        }
    }

    async updateWork(req, res, next) {
        try {
            const dataW = await worksDB.updateWork(req.params.workId, req.body);
            if (!dataW) {
                return res.status(400).json({ message: `Work not update, becose id not found`, response: null });
            }
            return res.status(200).json(dataW);
        } catch (error) {
            res.status(404).json({ message: `Work not update`, response: null });
        }
    }

    async deleteWork(req, res, next) {
        try {
            const dataW = await worksDB.removeWork(req.params.workId);
            return res.status(200).json(dataW);
        } catch (error) {
            res.status(404).json({ message: `Work not delete`, response: null });
        }
    }
}

module.exports = new Transaction();
