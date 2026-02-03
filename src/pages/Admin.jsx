import AdminLogin from "../components/AdminLogin";
import VentureManager from "../components/VentureManager";

const Admin = () => {
  const isLoggedIn = true; // 🔐 fake auth for V1

  return (
    <div className="p-8">
      {isLoggedIn ? <VentureManager /> : <AdminLogin />}
    </div>
  );
};

export default Admin;
