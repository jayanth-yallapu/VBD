const AdminLogin = () => {
  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Admin Login</h2>
      <input placeholder="Username" className="input mb-2" />
      <input type="password" placeholder="Password" className="input mb-4" />
      <button className="w-full bg-teal-500 text-white py-2 rounded">
        Login
      </button>
    </div>
  );
};

export default AdminLogin;
