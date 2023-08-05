import { prisma } from '../../../../../prisma/client';
 


export class signin{
  async execute({email = ""}){
      const a = prisma.user.findUnique({
        where:{
          email
        }
      })
  }
}



/*
export default async function Login() {
  const newUser = await prisma.user.create({
    data: {
      name: 'Elliott',
      email: 'xelliottx@example-user.com',
    },
  });
 
  const users = await prisma.user.findMany();
}*/