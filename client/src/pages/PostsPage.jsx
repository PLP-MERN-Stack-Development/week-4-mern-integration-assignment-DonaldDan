import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { createPost } from '../services/postService';

export default function PostsPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token'); // assumes token is saved after login
      await createPost({ title, content }, token);
      setMessage('Post created successfully!');
      setTitle('');
      setContent('');
    } catch (error) {
      setMessage(error.response?.data?.error || 'Failed to create post');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-xl p-6">
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">Create a New Post</h2>
          {message && <p className="mb-2 text-sm text-red-500">{message}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Post Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Post Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded-md h-40 resize-none"
              required
            />
            <Button type="submit">Publish Post</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
