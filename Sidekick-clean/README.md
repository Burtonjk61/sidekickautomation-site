# Sidekick Automation — Website (with Admin Mail)

## Quickstart
1. Install Node.js LTS.
2. In a terminal:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:3000

## Deploy (Vercel)
- Import project to Vercel. Add environment variables from `.env.example`.

## Admin Mail (free approach)
- Inbound: **Cloudflare Email Routing → Worker** posts to `/api/inbound-email` (set `INBOUND_URL` + `INBOUND_SECRET`).
- Storage: Supabase (run `supabase_emails.sql`, add `SUPABASE_URL` + `SUPABASE_ANON_KEY`).
- Outbound: Resend.com free dev plan (set `RESEND_API_KEY` + `RESEND_FROM`).

Routes:
- `/admin/login` (password = `ADMIN_PASSWORD`)
- `/admin/mail` (list emails)
- `/admin/mail/[id]` (read)
- `/admin/send` (send)

