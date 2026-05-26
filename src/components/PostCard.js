import API from '../api';

export default function PostCard({ post, onUpdate }) {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const like = async () => { await API.put(`/posts/${post._id}/like`); onUpdate(); };
  const save = async () => { await API.put(`/posts/${post._id}/save`); onUpdate(); };

  const liked = post.likes?.includes(user.id);
  const saved = post.saves?.includes(user.id);

  return (
    <div style={styles.card}>
      <img src={`http://localhost:5000${post.imageUrl}`} alt={post.title} style={styles.img} />
      <div style={styles.body}>
        <h4 style={styles.title}>{post.title}</h4>
        <p style={styles.desc}>{post.description}</p>
        <p style={styles.author}>by {post.author?.username}</p>
        <div style={styles.actions}>
          <button onClick={like} style={liked ? styles.activBtn : styles.actBtn}>
            ♥ {post.likes?.length || 0}
          </button>
          <button onClick={save} style={saved ? styles.activBtn : styles.actBtn}>
            🔖 {post.saves?.length || 0}
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card:    { background:'#fff', borderRadius:'12px', overflow:'hidden', boxShadow:'0 2px 12px rgba(0,0,0,0.08)' },
  img:     { width:'100%', display:'block', objectFit:'cover' },
  body:    { padding:'12px' },
  title:   { margin:'0 0 4px', fontSize:'15px', fontWeight:600 },
  desc:    { margin:'0 0 6px', fontSize:'13px', color:'#666' },
  author:  { fontSize:'12px', color:'#999', marginBottom:'8px' },
  actions: { display:'flex', gap:'8px' },
  actBtn:  { padding:'6px 12px', border:'1px solid #ddd', borderRadius:'20px', background:'#fff', cursor:'pointer', fontSize:'13px' },
  activBtn:{ padding:'6px 12px', border:'none', borderRadius:'20px', background:'#e60023', color:'#fff', cursor:'pointer', fontSize:'13px' },
};