import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  const { username, fullname } = await request.json()

  const user = await prisma.user.create({
    data: {
      username,
      fullname,
    },
  })

  return Response.json(user)
}
