const fs = require('fs/promises');
const path = require('path');
const worksPath = path.join(__dirname, './myWorks.json');
const { v4: uuidv4 } = require('uuid');

const listWork = async () => {
    const allWorkText = await fs.readFile(worksPath);
    const allWork = JSON.parse(allWorkText);
    return allWork || null;
};

const replaceWork = async workId => {
    const allWork = await listWork();
    const workByID = allWork.filter(item => item.id === workId);
    return workByID || null;
};

const removeWork = async workId => {
    const allWork = await listWork();
    const workByID = allWork.filter(item => item.id === workId);
    if (!workByID) {
        return null;
    }
    const newWork = allWork.filter(item => item.id !== workId);
    await fs.writeFile(worksPath, JSON.stringify(newWork));
    return workByID;
};

const addNewWork = async body => {
    if (!body) return null;
    const allWork = await listWork();
    const newWork = { id: uuidv4(), ...body };
    allWork.unshift(newWork);
    await fs.writeFile(worksPath, JSON.stringify(allWork));
    return newWork;
};

const updateWork = async (workId, body) => {
    if (!body.title) {
        return null;
    }
    const allWorks = await listWork();
    let oneWork = null;
    const newWorks = allWorks.map(item => {
        if (item.id === workId) {
            item = { id: workId, ...body };
            oneWork = item;
        }
        return item;
    });
    if (!oneWork) {
        return null;
    }
    await fs.writeFile(worksPath, JSON.stringify(newWorks));
    return oneWork;
};

module.exports = {
    listWork,
    replaceWork,
    removeWork,
    addNewWork,
    updateWork,
};
