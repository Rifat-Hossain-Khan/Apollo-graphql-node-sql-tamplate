const Analytics = require('../../models/analytics');

exports.analiticsQuery = {
    totalPendingQueries: async () => {
        try {
            const totalUsers = await Analytics.pendingQueries();
            console.log(totalUsers)
            return totalUsers[0][0].pendingQuries;
        } catch (error) {
            throw error;
        }
    }
}