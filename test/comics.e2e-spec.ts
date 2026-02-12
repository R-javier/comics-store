import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import  request from 'supertest';
import { AppModule } from '../src/app.module';


describe('Comics endpoints (e2e)', () => {
    let app: INestApplication;

    beforeAll(async() => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = module.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    it('GET /comics', async () => {
        const res = await request(app.getHttpServer()).get('/comics');
        expect(res.status).toBe(200);
        expect(res.text).toContain('Me traigo todos los comics');
    })

    it('POST /comics/:id', async () => {
        const res = await request(app.getHttpServer())
        .post('/comics')
        .send({ title: 'Batman #1' })
        expect(res.status).toBe(201)
        expect(res.text).toContain('Agrego comics')
    });

    it('DELETE /comics/:id', async() => {
        const res = await request(app.getHttpServer())
        .delete('/comics/1')
        expect(res.status).toBe(200)
        expect(res.text).toContain('Borro comics')
    });
});