import express from 'express';
import request from 'supertest';
import configureApp from '../../../src/config/express';

describe('User API', () => {
    let app: express.Application;
    beforeAll(() => {
        app = express();
        configureApp(app);
    })

    it('should return a hello world', async () => {
        const response = await request(app).get('/api/users');

        expect(response.text).toBe('Hello World!') 
    })

    it('should register a new user', async () => {
        const response = await request(app)
            .post('/api/users/register')
            .send({
        username: 'testuser',
        password: 'testpassword',
    });

        expect(response.status).toBe(201); // Verifica que el código de respuesta sea 201 (creado)
        expect(response.body.username).toBe('testuser'); // Verifica que el nombre de usuario sea el mismo que se envió
    })
})