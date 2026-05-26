import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const logout = () => { localStorage.clear(); nav('/login'); };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>📌 Pinboard</Link>
      <div style={styles.right}>
        {user ? <>
          <span style={styles.name}>Hi, {user.username}</span>
          <button style={styles.btn} onClick={logout}>Logout</button>
        </> : <Link to="/login">Login</Link>}
      </div>
    </nav>
  );
}

const styles = {
  nav:  { display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 32px', background:'#fff', boxShadow:'0 1px 6px rgba(0,0,0,0.08)', position:'sticky', top:0, zIndex:100 },
  logo: { fontSize:'20px', fontWeight:700, textDecoration:'none', color:'#e60023' },
  right:{ display:'flex', alignItems:'center', gap:'12px' },
  name: { fontSize:'14px', color:'#555' },
  btn:  { padding:'8px 16px', background:'#e60023', color:'#fff', border:'none', borderRadius:'20px', cursor:'pointer' },
};