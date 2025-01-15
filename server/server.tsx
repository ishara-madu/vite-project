import express from 'express';
const app = express();
const port = 3001;

let waitingUser: string | null = null;

app.get('/join', (req, res) => {
    if (waitingUser) {
        // Match found
        res.json({ matched: true, userId: waitingUser });
        waitingUser = null;
    } else {
        // No match, wait
        waitingUser = req.query.userId;
        res.json({ matched: false });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
