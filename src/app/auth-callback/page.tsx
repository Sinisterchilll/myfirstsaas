"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import { trpc } from '../_trpc/client'
import { Loader2 } from 'lucide-react'
import { Suspense } from 'react'

const Page = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')
  
    const { data, error, isLoading } = trpc.authCallback.useQuery(undefined, {
      retry: true,
      retryDelay: 500,
    })
  
    if (isLoading) {
      return (
        <div className='w-full mt-24 flex justify-center'>
          <div className='flex flex-col items-center gap-2'>
            <Loader2 className='h-8 w-8 animate-spin text-zinc-800' />
            <h3 className='font-semibold text-xl'>
              Setting up your account...
            </h3>
            <p>You will be redirected automatically.</p>
          </div>
        </div>
      )
    }
  
    if (error) {
      if (error.data?.code === 'UNAUTHORIZED') {
        router.push('/sign-in')
      } else {
        console.error('Error:', error)
        // Handle other error cases as needed
      }
      return null
    }
  
    // Check for success
    if (data?.success) {
      // User is synced to db
      router.push(origin ? `/${origin}` : '/dashboard')
      return null
    }
  
    // If none of the above conditions are met, return null or an appropriate component
    return null
  }

  const SuspensePage = () => (
    <Suspense fallback={<div>Loading...</div>}>
      <Page />
    </Suspense>
  )

  
  export default SuspensePage
  