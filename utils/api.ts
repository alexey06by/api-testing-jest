import request from 'supertest';
import dotenv from 'dotenv';
dotenv.config();

export const api = request(process.env.BASE_URL || '');