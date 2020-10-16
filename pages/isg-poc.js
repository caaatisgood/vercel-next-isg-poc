export default function isgPoc ({ imageUrl }) {
  return (
    <>
      <h1>ISG (incremental static generation) POC</h1>
      random cat image:<br />
      <img src={imageUrl} alt='random cat image' />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.thecatapi.com/v1/images/search')
  const images = await res.json()
  return {
    props: {
      imageUrl: images[0].url,
    },
    revalidate: 20,
  }
}
