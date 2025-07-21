// client/src/pages/HomePage.jsx
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // if using shadcn/ui
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md p-6 shadow-xl rounded-2xl">
        <CardContent className="space-y-4 text-center">
          <h1 className="text-2xl font-bold">Welcome to the Don Blog</h1>
          <p className="text-gray-600">Please login or register to continue</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link to="/login">
              <Button variant="default">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="outline">Register</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
