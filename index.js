'use strict'

module.exports = log => {
  log = log || console.error

  process.on('unhandledRejection', (err) => {
    log(err.stack || err)
  })
}