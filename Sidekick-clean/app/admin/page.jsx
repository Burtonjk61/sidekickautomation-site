// app/admin/page.tsx
export default function AdminPage() {
  return (
    <main style={{padding: 24}}>
      <h1>Admin</h1>
      <p>If you can see this, /admin works.</p>
      <form action="/api/send-email" method="POST">
        <input name="to" placeholder="to@example.com" />
        <input name="subject" placeholder="Subject" />
        <textarea name="text" placeholder="Message" />
        <button type="submit">Send Email</button>
      </form>
    </main>
  );
}
