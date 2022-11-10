const fs = require('fs/promises');
const path = require('path');
const infoPath = path.join(__dirname, './mainInfo.json');

const listInfo = async () => {
    const allInfoText = await fs.readFile(infoPath);
    const allInfo = JSON.parse(allInfoText);
    return allInfo || null;
};

const updateInfo = async body => {
    const info = await listInfo();
    const newInfo = { ...info, ...body };
    await fs.writeFile(infoPath, JSON.stringify(newInfo));
    return newInfo;
};

const updateAva = async originalname => {
    const info = await listInfo();
    const newInfo = await fs.writeFile(infoPath, JSON.stringify({ ...info, img: originalname }));
    return newInfo;
};

module.exports = {
    listInfo,
    updateInfo,
    updateAva,
};
