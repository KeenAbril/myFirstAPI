const mongoose = require('mongoose');

module.exports.createConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);

        console.log(`DB Connected!`);
        mongoose.connection.on(`error`, (error) => {
            mongoose.log(`ERROR The connection was interrupted: `, error);
        });
    } catch (err) {
        console.log(`ERROR Cannot connect to the DB`, err)
    }
}