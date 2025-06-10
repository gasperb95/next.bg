import styles from './comments.module.css';
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Comments({ postId }) {
  const { data, error } = useSWR(`/api/comments/${postId}`, fetcher)
  if (error) return <div>Failed to load comments.</div>
  if (!data) return <div>Loading...</div>
  const comments = Array.isArray(data) ? data : data.data || [];
  return (  
    <div>
      <div className={styles.comments}>
        <h2>Comments</h2>
        {comments.map((comment) => (
          <div key={comment._id} className={styles.card2}>
            <p><strong>{comment.name}</strong>:</p>
            <p>
              {new Date(comment.date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}