module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest-configs/setup-tests.js'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/jest-configs/no-parser-stub.js',
        '\\.(css|scss)$': '<rootDir>/jest-configs/no-parser-stub.js'
    },
};