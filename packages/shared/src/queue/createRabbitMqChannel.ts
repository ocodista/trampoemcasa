import amqplib from 'amqplib'

export async function createRabbitMqChannel({
  password,
  user,
}: {
  user: string
  password: string
}) {
  const connection = await amqplib.connect(
    `amqp://${user}:${password}@localhost`
  )
  return await connection.createChannel()
}