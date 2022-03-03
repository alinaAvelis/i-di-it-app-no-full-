import { rest } from 'msw';
import data from './data.json';

export const handlers = [
    // Handles a POST /login request
    rest.post('/data', (req, res, ctx) => {
        // Persist user's authentication in the session
        sessionStorage.setItem('is-authenticated', 'true')
        return res(
          // Respond with a 200 status code
          ctx.status(200),
        )
    }),

    // rest.get('/data', (_req, res, ctx) => {
    //   return res(ctx.status(200), ctx.json(data));
    // })

    rest.get('/data', (_req, res, ctx) => {
      let response = data.data;
      return res(ctx.status(200), ctx.json(response));
      }),

      // rest.get('/data/:email', (req, res, ctx) => {
      //   const {email} = req.params;
      //   let response = data[email];
    
      //   if (!response) {
      //     return res(ctx.status(404));
      //   }
    
      //   return res(ctx.status(200), ctx.json(response));
      // })
      // rest.post('/login', (req, res, ctx) => {
      //   const isAuthenticated = sessionStorage.getItem('username')
      //   if (!isAuthenticated) {
      //     return res(
      //       ctx.status(403),
      //       ctx.json({
      //         errorMessage: 'Not authenticated',
      //       }),
      //     )
      //   }
      //   return res(
      //     ctx.json({
      //       firstName: 'John',
      //     }),
      //   )
      // })
  ]