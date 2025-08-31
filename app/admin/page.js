export default function AdminHome() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Welcome to the Admin Dashboard</h1>
      <ul>
        <li><a href="/admin/login">Login</a></li>
        <li><a href="/admin/mail">Mail</a></li>
        <li><a href="/admin/send">Send</a></li>
      </ul>
    </div>
  );
}
