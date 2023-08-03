import { faker } from '@faker-js/faker'
import { ConsumeMessage } from 'amqplib'
import { EmailQueues } from 'shared/src/enums/emailQueues'
import * as connectToQueueFile from 'shared/src/queue/connectToQueue'
import { consumeMessage } from 'src/consumeMessage'
import { emailComposer } from 'src/emailComposer'
import { vi } from 'vitest'
import * as filterRolesFile from '../filterRoles'
import { emailPreRendererItem } from './factories/emailPreRendererQueueItem'
import {
  ackStub,
  assertQueueStub,
  channelMock,
  sendToQueueStub,
} from './helpers/rabbitMQ'

const connectToQueueStub = vi.fn()
const filterRolesStub = vi.fn()
describe('Email Composer Service Tests', () => {
  beforeEach(() => {
    vi.spyOn(connectToQueueFile, 'connectToQueue').mockImplementation(
      connectToQueueStub
    )
    vi.spyOn(filterRolesFile, 'filterRoles').mockImplementation(filterRolesStub)
    connectToQueueStub.mockResolvedValue(channelMock)
  })

  it('establish connection with rabbitMQ', async () => {
    await emailComposer()

    expect(connectToQueueStub).toBeCalled()
  })
  it(`Gets subscriber information from the ${EmailQueues.EmailPreRenderer} queue`, async () => {
    await emailComposer()

    expect(assertQueueStub).toBeCalledWith(EmailQueues.EmailPreRenderer)
  })

  describe('each queue message', () => {
    it('Verifies roles validity based on Supabase search', async () => {
      const queueMock = emailPreRendererItem()

      await consumeMessage(
        channelMock,
        channelMock
      )({
        content: Buffer.from(JSON.stringify(queueMock)),
      } as ConsumeMessage)

      expect(filterRolesStub).toBeCalled()
    })

    it('process messages and acknowledge RabbitMQ queue', async () => {
      await consumeMessage(
        channelMock,
        channelMock
      )({
        content: Buffer.from(JSON.stringify(emailPreRendererItem())),
      } as ConsumeMessage)

      expect(ackStub).toBeCalled()
    })
    it(`Send mounted HTML to ${EmailQueues.EmailComposer} queue`, async () => {
      const queueMock = emailPreRendererItem()
      const [email, { footerHTML, headerHTML }] = Object.entries(queueMock)[0]
      const filterRolesReturnMock = faker.string.sample()
      filterRolesStub.mockResolvedValue(filterRolesReturnMock)

      await consumeMessage(
        channelMock,
        channelMock
      )({
        content: Buffer.from(JSON.stringify(queueMock)),
      } as ConsumeMessage)

      expect(sendToQueueStub).toBeCalledWith(
        EmailQueues.EmailComposer,
        Buffer.from(
          JSON.stringify({
            [email]: `${headerHTML}${filterRolesReturnMock}${footerHTML}`,
          })
        )
      )
    })
  })
})