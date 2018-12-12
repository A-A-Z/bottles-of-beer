const numberDefault = 5

const numberWord = num => {
  switch (num) {
    case(-1):
      return numberDefault
    case(0):
      return 'No more'
    default:
      return num
  }
}

const bottleSyntax = {singular: 'bottle', plural: 'bottles'}

const bottleWord = num => (num === 1) ? bottleSyntax.singular : bottleSyntax.plural

const lyrics = [
  (num) => `${numberWord(num)} ${bottleWord(num)} of beer on the wall,`,
  (num) => `${numberWord(num)} ${bottleWord(num)} of beer,`,
  (num) => (num > 0) ? `Take one down, pass it around` : `Go to the store and buy some more,`,
  (num) => `${numberWord(num - 1)} ${bottleWord(num - 1)} of beer on the wall.`
]

const verse = (count = numberDefault) => {
  console.log(lyrics.map(lyric => lyric(count)).join('\n'))
  if (count > 0) verse(count - 1)
}

verse()
