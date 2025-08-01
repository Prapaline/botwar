const request = require('supertest');
const app = require('./server');

test('addition', () => {
    expect(1 + 1).toBe(2);
});

describe('GET /action', () => {
    test('should respond with status 200', async () => {
        const response = await request(app).get('/action');
        expect(response.statusCode).toBe(200);
    });

    test('should respond with a JSON object', async () => {
        const response = await request(app).get('/action');
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
    });

    test('should return an object with "move" and "action" properties', async () => {
        const response = await request(app).get('/action');
        expect(response.body).toHaveProperty('move');
        expect(response.body).toHaveProperty('action');
    });

    test('should return a valid move and action', async () => {
        const response = await request(app).get('/action');
        const validMoves = ['UP', 'DOWN', 'LEFT', 'RIGHT', 'STAY'];
        const validActions = ['COLLECT', 'ATTACK', 'BOMB', 'NONE'];
        expect(validMoves).toContain(response.body.move);
        expect(validActions).toContain(response.body.action);
    });
});