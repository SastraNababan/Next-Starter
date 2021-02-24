import Head from 'next/head'
import Image from 'next/image'
import tw from 'twin.macro'
import styled from 'styled-components'

const Card = styled.div`
  ${tw`p-6 border m-4 rounded-md`}
  flex-basis: 45%;
  transition: color 0.15s ease, border-color 0.15s ease;
  :hover {
    color: #0070f3;
    border-color: #0070f3;
  }
  h3 {
    ${tw`font-bold text-2xl mb-4`}
  }

  p {
    ${tw`text-lg leading-7`}
  }
  a:hover {
    color: #0070f3;
  }
`

const Footer = styled.footer`
  ${tw`flex w-full h-full justify-center items-center border-t`}
  a {
    ${tw`flex justify-center items-center`}
  }
  Image {
    ${tw`pl-10`}
  }
`

export const Home = (): JSX.Element => (
  <div tw="flex flex-col justify-center items-center min-h-screen">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main tw="flex flex-col flex-1 justify-center items-center w-6/12">
      <h1 tw="font-semibold text-6xl pb-4">
        Welcome to{' '}
        <a tw="text-blue-600" href="https://nextjs.org">
          Next.js!
        </a>
      </h1>

      <p tw="text-2xl  pb-4">
        Get started by editing <code>pages/index.tsx</code>
      </p>

      <button
        tw="mb-4 p-2 px-6 border  bg-gray-100"
        onClick={() => {
          window.alert('With typescript and Jest')
        }}
      >
        Test Button
      </button>

      <div tw="flex flex-wrap max-w-6xl">
        <Card>
          <a href="https://nextjs.org/docs">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </Card>
        <Card>
          <a href="https://nextjs.org/learn">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </Card>

        <Card>
          <a href="https://github.com/vercel/next.js/tree/master/examples">
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </Card>
        <Card>
          <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </Card>
      </div>
    </main>

    <Footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <Image
          tw="border"
          src="/vercel.svg"
          alt="Vercel Logo"
          height={'32'}
          width={'64'}
        />
      </a>
    </Footer>
  </div>
)

export default Home
