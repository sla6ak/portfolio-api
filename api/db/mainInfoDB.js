const fs = require('fs/promises');
const path = require('path');
const infoPath = path.join(__dirname, './myWorks.json');

const listInfo = async () => {
    const allInfoText = await fs.readFile(infoPath);
    const allInfo = JSON.parse(allInfoText);
    return allInfo || null;
};

const updateInfo = async (infoId, body) => {
    const newInfo = { ...body };

    await fs.writeFile(infoPath, JSON.stringify(newInfo));
    return newInfo;
};

module.exports = {
    listInfo,
    updateInfo,
};
