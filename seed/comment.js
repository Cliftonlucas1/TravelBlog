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

//  db.comment.insertOne({ name: "Beyonce Carter", description: "You guys are living your best life!.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQoyEd_fwlhBgkn6UBj9-JW3ISruMLxoL80A&usqp=CAU" } )

//  db.comment.insertOne({ name: 'George Bush', description: 'I cant wait until i go looks like fun.', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy_mhsdTgqMYWXSUG2hDU0frkwTzzaM8LXDA&usqp=CAU" } )

//  db.comment.insertOne({ name: 'Chris hater', description: 'It looks boring.', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVjQe48TbUSH-F2P3fV7rHqVPj58DruZ_wJw&usqp=CAU" } )

// db.comment.find( {} )

// db.comment.deleteOne( { name: "Chris hater" } )
