import { useState } from 'react';
import API from '../api';

export default function UploadModal({ onClose }) {
  const [form, setForm] = useState({ title:'', description:'', category:'General' });
  const [file, setFile] = useState(null);

  const submit = async () => {
    const fd = new FormData();
    fd.append('title', form.title);
    fd.append('description', form.description);
    fd.append('category', form.category);
    fd.append('image', file);
    await API.post('/posts', fd, { headers:{ 'Content-Type':'multipart/form-data' } });
    onClose();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>Upload a Pin</h3>
        <input style={styles.input} placeholder="Title" value={form.title}
          onChange={e => setForm({...form, title: e.target.value})} />
        <textarea style={styles.input} placeholder="Description"
          onChange={e => setForm({...form, description: e.target.value})} />
        <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} />
        <div style={styles.btns}>
          <button style={styles.cancel} onClick={onClose}>Cancel</button>
          <button style={styles.save} onClick={submit}>Post</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: { position:'fixed', inset:0, background:'rgba(0,0,0,0.5)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:200 },
  modal:   { background:'#fff', padding:'32px', borderRadius:'16px', width:'400px', display:'flex', flexDirection:'column', gap:'12px' },
  input:   { padding:'10px', borderRadius:'8px', border:'1px solid #ddd', fontSize:'14px', width:'100%', boxSizing:'border-box' },
  btns:    { display:'flex', gap:'8px', justifyContent:'flex-end' },
  cancel:  { padding:'10px 20px', borderRadius:'20px', border:'1px solid #ddd', cursor:'pointer' },
  save:    { padding:'10px 20px', borderRadius:'20px', background:'#e60023', color:'#fff', border:'none', cursor:'pointer' },
};