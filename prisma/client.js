import { prisma } from './client';

const client = globalThis.prisma || prisma
if(process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client