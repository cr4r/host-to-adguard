const cpl = require('@adguard/hostlist-compiler')
const { writeFileSync } = require('fs')
const config = require('./config.json')

const exclusions = [
  "googlesyndication.com"
]

const run = async (cfg) => {
  a = await cpl(cfg)
  b = a.filter(isi => exclusions.includes(isi.replace(/[\|^]/g, '')) && isi.length > 0)
    .join('\n')
    .replace('@adguard\/hostlist-compiler', config.name)
  await writeFileSync('hosts', b)
}

run(require('./config.json'));