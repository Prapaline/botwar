import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/action', (req, res) => {
    const moves = ['UP', 'DOWN', 'LEFT', 'RIGHT', 'STAY'];
    const actions = ['COLLECT', 'ATTACK', 'BOMB', 'NONE'];
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];

    res.json({ move: randomMove, action: randomAction });
});
export default app;


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});