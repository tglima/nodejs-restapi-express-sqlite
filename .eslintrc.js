module.exports = {
    'env': {
        'es2021': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'plugin': 'node/recommended',
    'plugin': 'security/recommended',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'rules': {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        indent: ['error', 4],
        'max-len': ['error', { code: 80 }],
        'comma-spacing': ['error', {before: false, after: true}],
        'node/exports-style': ['error', 'module.exports'],
        'node/file-extension-in-import': ['error', 'always'],
        'node/prefer-global/buffer': ['error', 'always'],
        'node/prefer-global/console': ['error', 'always'],
        'node/prefer-global/process': ['error', 'always'],
        'node/prefer-global/url-search-params': ['error', 'always'],
        'node/prefer-global/url': ['error', 'always'],
        'node/prefer-promises/dns': 'error',
        'node/prefer-promises/fs': 'error'        
    }
};
