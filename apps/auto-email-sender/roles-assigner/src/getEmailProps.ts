import { Subscribers } from 'db'
import { Role } from './getSubscriberRoles'

export interface EmailProps {
  email: string
  id: string
  rolesId: string[]
}

export const getEmailProps = (
  subscriber: Subscribers,
  roles: Role[]
): EmailProps => {
  console.time(`getEmailProps#${subscriber.email}`)
  const emailProps = {
    email: subscriber.email,
    id: subscriber.id,
    rolesId: roles.map((role) => role.id),
  }
  console.timeEnd(`getEmailProps#${subscriber.email}`)

  return emailProps
}
