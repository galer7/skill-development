import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { prisma } from "../../db";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
    get: protectedProcedure
        .input(z.object({ id: z.string() }))
        .query(async ({ input }) => {
            const study = await prisma.user.findUnique({
                where: input,
            });
            return study;
        }),

    getAll: protectedProcedure.query(async ({ ctx }) => {
        return await prisma.user.findMany();
    }),
});
