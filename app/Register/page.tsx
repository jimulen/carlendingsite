import { getSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import RegisterForm from '@/components/RegisterForm';

export default async function Register() {
  const session = await getSession();

  if (session) {
    redirect('/Main');
  }

  return <RegisterForm />;
}
