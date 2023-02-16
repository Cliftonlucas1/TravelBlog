const db = require('../db')
const Comment = require('../models/comment')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const comment = [
    {
      name: 'George Bush',
      description: 'I cant wait until i go looks like fun.',
      image: ' '
    }
  ]

  await Comment.insertMany(comment)
  console.log('Created some Comment!')
}
const run = async () => {
  await main()
  db.close()
}

run()
