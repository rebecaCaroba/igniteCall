import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const data = JSON.parse(body)

  const { username, fullname } = data

  const userExist = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  console.log(userExist)

  if (userExist) {
    return NextResponse.json(
      {
        message: 'Usuário já cadastrado',
      },
      { status: 409 },
    )
  }

  const user = await prisma.user.create({
    data: {
      username,
      fullname,
    },
  })

  cookies().set({
    name: '@ignitecall:userId',
    value: `${user.id}`,
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })

  return NextResponse.json(user)
}
