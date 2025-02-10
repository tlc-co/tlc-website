import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
});

export const config = {
  // Apply middleware for all routes except for static assets (public)
  matcher: ['/((?!api|_next|_next/image|.*\\..*|favicon.ico).*)']

};
