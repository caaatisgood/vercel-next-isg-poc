import useSWR from 'swr'

export default function apiPoc () {
  const { data, error } = useSWR('/api/hello')
  if (error) {
    return 'failed to load'
  }
  if (!data) {
    return 'is loading'
  }
  console.log('> data', data)
  return 'data is loaded, please check your console to see the data'
}
