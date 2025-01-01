import { ReactNode } from 'react';
import { MainPrivateLayout } from '@/components';

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <MainPrivateLayout>{children}</MainPrivateLayout>;
}
