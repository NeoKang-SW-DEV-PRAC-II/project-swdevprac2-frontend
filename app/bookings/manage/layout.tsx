'use client'
import { getServerSession } from 'next-auth';
import { ReactNode } from 'react';
import { authOptions } from '../../api/auth/[...nextauth]/authOptions';
import { useSession } from 'next-auth/react';

interface DashboardLayoutProps {
  children: ReactNode;
  admin: ReactNode;
  user: ReactNode;
}

export default function DashboardLayout({
  children,
  admin,
  user,
}: DashboardLayoutProps) {
    const { data: session } = useSession();

    if (!session) {
        return null;
        }
        
  return (
    <div>
      {session.user.role === 'admin' && admin}
      {session.user.role === 'user' && user}
      {children}
    </div>
  );
}
