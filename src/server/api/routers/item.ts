import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const itemRouter = createTRPCRouter({
  getItems: publicProcedure.query(async ({ ctx }) => {
    const items = await ctx.prisma.shoppingItem.findMany();
    return items;
  }),

  addItem: publicProcedure.input(z.object({ name: z.string() })).mutation(async ({ ctx, input }) => {
    const item = await ctx.prisma.shoppingItem.create({
      data: {
        name: input.name,
      },
    });
    return item;
  }),

  deleteItem: publicProcedure.input(z.object({ id: z.string() })).mutation(async ({ ctx, input }) => {
    const item = await ctx.prisma.shoppingItem.delete({
      where: {
        id: input.id,
      },
    });
    return item;
  }),

  toggleChecked: publicProcedure
    .input(z.object({ id: z.string(), checked: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      const item = await ctx.prisma.shoppingItem.update({
        data: {
          checked: input.checked,
        },
        where: {
          id: input.id,
        },
      });

      return item;
    }),
});
