const app = require('./app');
const {api: {port}} = require('./config');

app.listen(port, () => {
    console.log(`listening on port ${port}!`);
})