const fs = require('fs')
const path = require('path')

module.exports = {
  async exportPathMap() {
    return {
      '/': {
        page: '/',
      },
      '/resume': {
        page: '/resume',
        query: {
          source: fs.readFileSync(
            path.join(__dirname, 'pages', 'Resume.md'),
            'utf-8',
          ),
        },
      },
      '/404.html': { page: '_error' },
    }
  },
}
