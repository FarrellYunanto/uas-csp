import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase'
 
export async function proxy(request: NextRequest) {
    const supabase = await createClient();
  
    const {
      data: { user },
    } = await supabase.auth.getUser();
  
    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
  matcher: '/dashboard/:path*',
}
