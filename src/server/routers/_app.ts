/**
 * This file contains the root router of your tRPC-backend
 */
import { publicProcedure, router } from '../trpc';
import { postRouter } from './post';
import { userRouter } from './user';

export const appRouter = router({
  healthCheck: publicProcedure.query(() => 'yay!'),
  posts: postRouter,
  users: userRouter,
});

export type AppRouter = typeof appRouter;
