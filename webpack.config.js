const path = require('path');
module.exports = {
    mode: 'production',
    entry: {
        bundle: [
            './content/script/lib/vue-components.js',
            './content/script/lib/vue-data.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, './content/script/dis/'),
        filename: '[name].js'
    }
};