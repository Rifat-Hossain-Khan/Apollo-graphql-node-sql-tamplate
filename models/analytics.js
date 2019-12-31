const db = require('../config/db');

module.exports = class Analytics {

    static pendingQueries() {
        return db.execute("SELECT COUNT(*) AS pendingQuries FROM activities JOIN account_circles ON activities.account_id = account_circles.account_id WHERE account_circles.circle_id = 1 AND activities.archived = 0");
    }

};