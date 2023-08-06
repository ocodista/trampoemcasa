import { GetMessage } from 'amqplib'
import { EmailPreRenderMessage } from './emailComposer'
import { getHtmlRoles } from './getHtmlRoles'

export const parsePreRenderMessage = async (
  msgContent: GetMessage['content']
): Promise<Record<string, string>> => {
  const emailPreRender = JSON.parse(
    msgContent.toString()
  ) as EmailPreRenderMessage
  const [email] = Object.keys(emailPreRender)
  const { footerHTML, headerHTML, roles } = emailPreRender[email]
  const rolesHTML = await getHtmlRoles(roles)
  const bodyHTML = `${headerHTML}${rolesHTML}${footerHTML}`
  return { [email]: bodyHTML }
}
