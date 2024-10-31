import { getSupabaseClient } from 'db'
import { notFound } from 'next/navigation'
import ApplicationsManagement from './ApplicationManagement'

interface PageProps {
  params: {
    id: string
    roleId: string
  }
}

async function getApplications(roleId: string) {
  const supabase = getSupabaseClient()

  const { data: applications, error } = await supabase
    .from('RoleApplications')
    .select(
      `
      *,
      Subscribers (
        name,
        email,
        englishLevel
      ),
      Roles (
        title
      )
    `
    )
    .eq('roleId', roleId)
    .order('createdAt', { ascending: false })

  if (error) {
    console.error('Error fetching applications:', error)
    return null
  }

  return applications
}

async function verifyRoleOwnership(roleId: string, userId: string) {
  const supabase = getSupabaseClient()

  const { data, error } = await supabase
    .from('RoleOwner')
    .select('*')
    .eq('roleID', roleId)
    .eq('subscriberID', userId)
    .single()

  if (error || !data) {
    return false
  }

  return true
}

export default async function ApplicationsPage({ params }: PageProps) {
  const { id: userId, roleId } = params

  const hasAccess = await verifyRoleOwnership(roleId, userId)
  if (!hasAccess) {
    notFound()
  }

  const applications = await getApplications(roleId)
  if (!applications) {
    notFound()
  }

  return (
    <ApplicationsManagement
      roleId={roleId}
      userId={userId}
      applications={applications}
    />
  )
}
