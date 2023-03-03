import { prisma } from '@/lib/prisma'
import { User } from '@prisma/client'
import { GetServerSideProps } from 'next'

type Props = {
  user: User
}

export default function Page(props: Props) {
  return <main>Hello, {props.user.name}</main>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await prisma.user.findFirst({
    where: {
      email: 'test@test.com'
    }
  })

  return {
    props: {
      user
    }
  }
}
