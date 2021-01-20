export default function UserData(props) {
  return (
    <>
      <p><b>name:</b> {props.name}</p>
      <p><b>fetched at:</b> {props.fetchedAt ? new Date(props.fetchedAt).toLocaleString() : ''}</p>
    </>
  )
}
