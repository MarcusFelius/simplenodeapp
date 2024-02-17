// new comment to trigger the actions
// trigger number 2
// third time is a charm
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Hello, World</h1>');
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('server running on port ${PORT}'));
