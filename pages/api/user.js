export default async (req, res) => {
  await timeout(800)
  res.statusCode = 200
  res.json({
    name: 'John Doe',
    fetchedAt: Date.now(),
  })
}

const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms))
