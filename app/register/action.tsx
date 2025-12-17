'use server'

import { createClient } from '@/lib/supabase'
import { redirect } from 'next/navigation'

export type RegisterState = {
  error?: string
}

export async function register(
  _: RegisterState,
  formData: FormData
): Promise<RegisterState> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const supabase = await createClient()

  const { error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    return { error: error.message }
  }

  redirect('/login')
}
