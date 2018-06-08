module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-custom-properties')({
            appendVariables: true,
            variables: {
              color: 'green'
            }
          })
    ]
}