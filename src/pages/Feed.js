import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import API from '../api';
import PostCard from '../components/PostCard';
import UploadModal from '../components/UploadModal';
import './Feed.css';

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [showUpload, setShowUpload] = useState(false);

  const load = async () => {
    const { data } = await API.get('/posts');
    setPosts(data);
  };

  useEffect(() => { load(); }, []);

  const breakpoints = { default: 4, 1100: 3, 700: 2, 500: 1 };

  return (
    <div style={{ padding:'24px' }}>
      <div style={{ textAlign:'right', marginBottom:'16px' }}>
        <button onClick={() => setShowUpload(true)}
          style={{ padding:'10px 20px', background:'#e60023', color:'#fff', border:'none', borderRadius:'20px', cursor:'pointer', fontSize:'15px' }}>
          + Upload
        </button>
      </div>
      <Masonry breakpointCols={breakpoints} className="masonry-grid" columnClassName="masonry-col">
        {posts.map(p => <PostCard key={p._id} post={p} onUpdate={load} />)}
      </Masonry>
      {showUpload && <UploadModal onClose={() => { setShowUpload(false); load(); }} />}
    </div>
  );
}