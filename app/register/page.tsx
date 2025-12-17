'use client'

import { useActionState } from 'react'
import { register, type RegisterState } from './action'

const initialState: RegisterState = {}

export default function RegisterPage() {
  const [state, formAction] = useActionState(register, initialState)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Account
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Register to get started
          </p>
        </div>

        {/* Error message */}
        {state.error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {state.error}
          </div>
        )}

        {/* Form */}
        <form action={formAction} className="space-y-5">
          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border px-4 py-2.5 text-sm
                         focus:border-black focus:outline-none
                         focus:ring-2 focus:ring-black/10"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full rounded-lg border px-4 py-2.5 text-sm
                         focus:border-black focus:outline-none
                         focus:ring-2 focus:ring-black/10"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-black py-2.5 text-sm
                       font-medium text-white transition
                       hover:bg-gray-800 active:scale-[0.98]"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <a
            href="/login"
            className="font-medium text-black hover:underline"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  )
}
