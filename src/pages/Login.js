import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../api';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const nav = useNavigate();

  const submit = async e => {
    e.preventDefault();
    try {
      const { data } = await API.post('/auth/login', form);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      nav('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome back</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={submit}>
          <input style={styles.input} placeholder="Email"
            value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          <input style={styles.input} type="password" placeholder="Password"
            value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
          <button style={styles.btn} type="submit">Log in</button>
        </form>
        <p style={styles.link}>No account? <Link to="/register">Sign up</Link></p>
      </div>
    </div>
  );
}

const styles = {
  page:  { minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'#f5f5f5' },
  card:  { background:'#fff', padding:'40px', borderRadius:'16px', width:'360px', boxShadow:'0 4px 24px rgba(0,0,0,0.08)' },
  title: { textAlign:'center', marginBottom:'24px', fontSize:'22px' },
  input: { width:'100%', padding:'12px', margin:'8px 0', borderRadius:'8px', border:'1px solid #ddd', fontSize:'15px', boxSizing:'border-box' },
  btn:   { width:'100%', padding:'13px', background:'#e60023', color:'#fff', border:'none', borderRadius:'8px', fontSize:'16px', cursor:'pointer', marginTop:'8px' },
  error: { color:'#e60023', textAlign:'center', marginBottom:'8px' },
  link:  { textAlign:'center', marginTop:'16px', fontSize:'14px' },
};