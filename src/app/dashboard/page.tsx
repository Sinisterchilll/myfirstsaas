 import { db } from '@/db'
// import { getUserSubscriptionPlan } from '@/lib/stripe'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import Dashboard from '../components/Dashboard'

const Page = async () => {
  const {getUser} = getKindeServerSession()
  const user = await getUser()
    
  if (!user || !user.email) redirect('/auth-callback?origin=dashboard')

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id
    }
  })

  if(!dbUser) redirect('/auth-callback?origin=dashboard')

//   const subscriptionPlan = await getUserSubscriptionPlan()

//   return <Dashboard subscriptionPlan={subscriptionPlan} />
return <Dashboard />
}

export default Page