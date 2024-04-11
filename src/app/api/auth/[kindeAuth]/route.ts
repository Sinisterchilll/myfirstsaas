import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

export default async function handler(request: NextRequest, { params }: any) {
  const endpoint = params.kindeAuth;
  return handleAuth(request, endpoint);
}
