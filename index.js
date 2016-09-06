const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('JSONPlaceholder listening on http://localhost:' + port)
});