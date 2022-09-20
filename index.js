const cpl = require('@adguard/hostlist-compiler')
const { writeFileSync } = require('fs')
const config = require('./config.json')

const run = async (cfg) => {
  a = await cpl(cfg)
  b = a.filter(isi => isi.length > 0).join('\n').replace('@adguard\/hostlist-compiler', config.name)
  await writeFileSync('hosts', b)
}

run(require('./config.json'));