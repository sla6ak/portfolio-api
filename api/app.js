const app = require('./config/serverConfig');
const path = require('path');

const routerTransaction = require('./routers/works.routes');
const routerMain = require('./routers/mainInfo.routes');

app.use('/works', routerTransaction);
app.use('/main', routerMain);

app.use('*', (req, res) => {
    res.status(404).json({ message: 'Not found try later' });
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'portfolio-app', 'build', 'index.html'));
});

app.use((err, req, res, next) => {
    const { status = 500, message = 'Server error' } = err;
    res.status(status).json({ message });
});

module.exports = app;
