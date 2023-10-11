const express = require('express');
const router = express.Router();
const app = express();
const port = 5000;








module.exports = router;
app.listen(4534, () => console.log(`The server is running on port ${port}`));