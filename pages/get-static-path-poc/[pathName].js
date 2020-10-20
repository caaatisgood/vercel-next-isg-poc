import { useRouter } from 'next/router'

export default function getStaticPathPoc ({ name, generatedAt }) {
  const router = useRouter()
  if (router.isFallback) {
    return 'generating...'
  }
  return (
    <div>
      <h1>page: {name}</h1>
      <h2>generated at: {new Date(generatedAt).toString()}</h2>
    </div>
  )
}

export function getStaticPaths () {
  return {
    paths: [
      {
        params: {
          pathName: 'foo',
        },
      },
      {
        params: {
          pathName: 'bar',
        },
      },
      {
        params: {
          pathName: 'baz',
        },
      },
    ],
    fallback: true,
  }
}

export function getStaticProps (props) {
  const now = Date.now()
  return {
    props: {
      name: props.params.pathName,
      generatedAt: now,
    },
    revalidate: 10,
  }
}
