import { useState, useEffect } from 'react';
import axios from 'axios';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CreatePostPage() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/categories')
      .then(res => setCategories(res.data))
      .catch(err => {
        console.error('Error fetching categories:', err);
        setError('Failed to load categories');
      });
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/posts', formData);
      setSuccess('Post created successfully!');
      setFormData({ title: '', content: '', category: '' });
    } catch (err) {
      console.error('Post creation failed:', err);
      setError('Failed to create post');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <Card className="w-full max-w-2xl p-6 shadow-xl">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-4 text-center">Create a New Post</h2>
          {error && <p className="text-red-500 mb-3">{error}</p>}
          {success && <p className="text-green-600 mb-3">{success}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="title"
              placeholder="Post Title"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <Textarea
              name="content"
              placeholder="Post Content"
              rows={5}
              value={formData.content}
              onChange={handleChange}
              required
            />
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Select a Category</option>
              {categories.map(cat => (
                <option key={cat._id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
            <Button type="submit" className="w-full">
              Create Post
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
