'use strict'

const logRejectError = require('..')

describe('simple', function() {
  it('it works', function() {
    async function hello() {
      throw new Error('boom')
    }

    logRejectError((content) => {
      content.should.match(/Error: boom\n/)
    })

    hello()
  })
})