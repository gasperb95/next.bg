import styles from './comments.module.css';
import useSWR, { mutate } from 'swr'
import { useRef } from 'react';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Comments({ postId }) {
  const { data, error } = useSWR(`/api/comments/${postId}`, fetcher)
  const formRef = useRef();

  if (error) return <div>Failed to load comments.</div>
  if (!data) return <div>Loading...</div>
  const comments = Array.isArray(data) ? data : data.data || [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      text: form.text.value,
    };
    await fetch(`/api/comments/${postId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    form.reset();
    mutate(`/api/comments/${postId}`); // Refresh comments
  };

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
        <div className={styles.card2}>
          <h3>Add a Comment</h3>
          <form onSubmit={handleSubmit} ref={formRef}>
            <label htmlFor="name">Name:</label>
            <br />
            <input type="text" id="name" name="name" required />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input type="text" id="email" name="email" required />
            <br />
            <label htmlFor="text">Comment:</label>
            <br />
            <textarea id="text" name="text" required></textarea>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}