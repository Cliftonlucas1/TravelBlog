const db = require('../db')
const Plant = require('../models/post')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const posts = [
    {
      name: 'Mexico, Mexico City',
      description:
        'the Mexican capital is well worth a visit. The city is home to more museums than any city in the world, including the incredible Museum of Anthropology and Frida Kahlo House. You can also visit the only castle in North America on a visit to the massive Chapultepec Park, see the masked luchadores battle it out in the ring, hire a mariachi band to serenade that special someone, or party til the sun comes up.',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YZV2v4jiJLNv4C-HTyiRgwHaE8%26pid%3DApi&f=1&ipt=143f30a2f36473d846deb02300a09ab5f6a20587e157117536adcd7687e1f44f&ipo=images'
    },
    {
      name: 'Bahamas, Grand Bahamas',
      description:
        'Had a blast in the Bahamas, Go to the Lucaya Marketplace If you don’t bring home a souvenir or two, you never really went anywhere. Its found near the Port Lucaya Maria on Bell Channel Bay, it’s one of the largest shopping, dining and entertainment venues in the Bahamas. There are more than 40 shops and venders and shops selling clothing, jewelry, art, local crafts and souvenirs.',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7rAyF7FZsfjL8BYGQug4IwHaE6%26pid%3DApi&f=1&ipt=a990714e1b2150b58a724d1d9786d1f942a604882594d04373310d4442fbc35e&ipo=images, https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LjoxDXonyKwAw-UNvhw8PgHaFj%26pid%3DApi&f=1&ipt=6c747d1c8e81951d84868debc6ed514088a9cbf9dc21354ce3a86c4846df797d&ipo=images'
    },
    {
      name: 'Canada, Vancouver Island',
      description:
        'I set out on 15 day road trip from Edmonton to Vancouver Island and back.  We spent a lot of our time on “The Island” (as us Western Canadians call it) since it has a little bit of everything- great beaches, gorgeous provincial parks, and romantic gardens.',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.9zKHahcTBIjIer2dnHSZIwHaE8%26pid%3DApi&f=1&ipt=65fe00560815c17d8388cafc0846c401170e874093912c68a21f013aca910286&ipo=images'
    },
    {
      name: 'Dominican Republic, Cayo Arena',
      description:
        ' a boat ride to Cayo Arena (Paradise Island). We spend a couple of hours there and then on the way back we were taken by boat through the mangroves. Later in the day we headed back into the town of Punta Rucia where we spent the afternoon at a beautiful hotel enjoying the beach and the pool.',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.A6v7woNDqqDFmySKc6xhjAHaDG%26pid%3DApi&f=1&ipt=f3f7712b65ad61c1c50d326139373154ac4872b8c9c2ed1ba7f77ba76fa70678&ipo=images'
    },
    {
      name: 'Mexico, Cancun',
      description:
        'the ancient ruins dating back to the 7th Century. When I first saw the main pyramid, El Castillo, I was in awe – to think something so vast and detailed was built so long ago! It still holds plenty of secrets too, making it all the more intriguing.',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tripsavvy.com%2Fthmb%2FXYJevuxyirYYJA633coZ9SD4jF8%3D%2F3865x2576%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Fel-castillo--148592462-59a70345685fbe001067598e.jpg&f=1&nofb=1&ipt=b5f1a49e77602502c7a19cfd2cef97b0131239f105934ca000e3930a5c3f94ad&ipo=images'
    },
    {
      name: 'Jamacia, Port Antonio',
      description:
        'We spent a terrific Sunday morning climbing Reach Falls in Port Antonio, in the east of the island. An absolutely stunning lush virgin rainforest setting, surrounded by uncurling ferns and towering palms. I really love being surrounded by plants.',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.an8ULR-HPsYwmHIjFeRMJQHaFO%26pid%3DApi&f=1&ipt=c72201d1cc994dcbdcbb67943000a36b9d150d84f051fcf018021effcb4d55f4&ipo=images'
    },
    {
      name: 'Hawaii, Big Island',
      description:
        'Thrill Seekers! you have to see some of the most beautiful scenery on the South Point cliff dive, near the town of Naalehu. This national historic landmark district offers an amazing vista of the southernmost part of Hawaii.',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-JP7yOlwjItk%2FVTl6215UoDI%2FAAAAAAAAMI0%2Fa7I4U5N-8v4%2Fs1600%2FDSC_0327%252B1.jpg&f=1&nofb=1&ipt=6254faad81996001889ae11bd3dcaa9c01cd6cfe630a73b9a3a7f8fbf0316789&ipo=images'
    },
    {
      name: 'Thailand, BangKok',
      description:
        'BangKok is a beautiful place to visit. Wat Phra Kaeo and the Grand Palace, with the 19th century Grand Palace a fascinating mix of Western and Thai styles. Wat Phra Kaeo, which houses the Emerald Buddha, is generally regarded as the most important Buddhist temple in the country.',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tripsavvy.com%2Fthmb%2F8ZvQjzLoXGk6jt1Fr3oKNYjKvkg%3D%2F6016x4016%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Fbangkok-grand-palace-5aadb03e8e1b6e0037023644.jpg&f=1&nofb=1&ipt=9cb6857066b2c1155e4b790199106cedb3b06a2610b8e9343fca156e49a1a36e&ipo=images'
    },
    {
      name: 'Los Angeles, California',
      description:
        'I loved my vacation to Hollywood it was lucky and spotted a few celebrities like Jay Z and Beyonce shopping on Rodeo Drive.',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tripsavvy.com%2Fthmb%2FMC6xUVqTD7-p5COvNscu84HGIvM%3D%2F1500x1125%2Ffilters%3Afill(auto%2C1)%2F20100210_0134-a-56a384ad5f9b58b7d0d26932.jpg&f=1&nofb=1&ipt=c552dc32aa9c5bf8b8f00585a6115f8dd3b5d0199650a56d18a173f08f1cd3dd&ipo=images'
    }
  ]

  await Post.insertMany(post)
  console.log('Created some Post!')
}
const run = async () => {
  await main()
  db.close()
}

run()
