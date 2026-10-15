import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createEnquiry, createNewsletterSubscriber } from "./db";

const enquiryInput = z.object({ name: z.string().min(2).max(160), businessName: z.string().max(200).optional(), email: z.string().email(), phone: z.string().max(80).optional(), websiteUrl: z.string().max(500).optional(), websiteType: z.string().max(120).optional(), services: z.string().max(1000).optional(), projectDescription: z.string().min(20).max(10000), budget: z.string().max(120).optional(), completionDate: z.string().max(120).optional(), preferredContact: z.string().max(80).optional(), country: z.string().max(120).optional(), consent: z.literal(true), });

export const appRouter = router({
  system: systemRouter,
  auth: router({ me: publicProcedure.query(opts => opts.ctx.user), logout: publicProcedure.mutation(({ ctx }) => { const cookieOptions = getSessionCookieOptions(ctx.req); ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 }); return { success: true } as const; }) }),
  leads: router({ create: publicProcedure.input(enquiryInput).mutation(async ({ input }) => { await createEnquiry({ name: input.name, email: input.email, projectDescription: input.projectDescription, services: input.services ?? null, businessName: input.businessName ?? null, phone: input.phone ?? null, websiteUrl: input.websiteUrl ?? null, websiteType: input.websiteType ?? null, budget: input.budget ?? null, completionDate: input.completionDate ?? null, preferredContact: input.preferredContact ?? null, country: input.country ?? null }); return { success: true }; }), subscribe: publicProcedure.input(z.object({ email: z.string().email() })).mutation(async ({ input }) => { await createNewsletterSubscriber(input.email); return { success: true }; }) }),
});
export type AppRouter = typeof appRouter;
