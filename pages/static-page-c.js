import useSWR from 'swr'
import NavLayout from '../components/NavLayout'
import UserData from '../components/UserData'

export default function pageC () {
  const { data, isValidating } = useSWR('/api/user')

  return (
    <NavLayout>
      <h1>page C</h1>
      <small>isValidating: {isValidating.toString()}</small><br />
      <UserData {...data} />
    </NavLayout>
  )
}
