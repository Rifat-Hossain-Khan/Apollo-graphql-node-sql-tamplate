const { analiticsQuery } = require('./analytics');

const resolvers = {
    Query: {
        ...analiticsQuery
    },
};

module.exports = resolvers;