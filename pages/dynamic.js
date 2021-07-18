import { useState } from 'react'
import dynamic from 'next/dynamic'

const JustAComponent = dynamic(() => import('../components/JustAComponent'), {
  ssr: false,
})

const Page = () => {
  const [interacted, setInteracted] = useState(false)
  return (
    <>
      <h1>Dynamic import</h1>
      <button onClick={() => setInteracted(true)}>click me</button>
      {interacted && <JustAComponent />}
    </>
  )
}

export default Page
