import { inngest } from '@/inngest/client';
import { createTRPCRouter, protectedProcedure } from '../init';
import prisma from '@/lib/db';
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';


export const appRouter = createTRPCRouter({

  testAi: protectedProcedure.mutation(async()=>{
    const { text } = await generateText({
  model: google('gemini-2.5-flash'),
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});
  return text;
  }),
  getWorkflows: protectedProcedure.query(({ctx}) => {
      return prisma.workflow.findMany();
    }),
    createWorkflow:protectedProcedure.mutation(async ()=>{

      await inngest.send({
        name:"test/hello.world",
        data:{
          email:"pankaj@gmail.com",
        },
      });

      return {success:true , message:"job queued"}
    }),
});
export type AppRouter = typeof appRouter;