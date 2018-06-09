module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-custom-properties')({
            preserve: false,
            variables: {
                'color': 'green',
                'accent-color': 'purple'
            }
        })
    ]
}
