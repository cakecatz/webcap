import createNightmare from 'nightmare';

export default function capture(url, options) {
  const nightmare = createNightmare({
    webPreferences: {
      partition: 'screenshot',
    },
  });
  nightmare
    .viewport(options.width, options.height)
    .goto(url)
    .wait('body')
    .screenshot(`${Date.now()}.jpg`)
    .end()
    .then(() => {
      console.log('Captured!');
    });
}
