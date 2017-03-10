'use strict'

const logRejectError = require('..')

describe('simple', function() {
  beforeEach(() => {
    process.removeAllListeners('unhandledRejection')
  })

  it('it works', function(done) {
    async function hello() {
      throw new Error('boom')
    }

    logRejectError((content) => {
      content.should.match(/Error: boom\n/)
      done()
    })

    hello()
  })

  it('support multi times import', function(done) {
    async function hello() {
      throw new Error('boom')
    }

    let x = 0
    let timer
    const fn = (content) => {
      content.should.match(/Error: boom\n/)
      x++
      clearTimeout(timer)
      timer = setTimeout(() => {
        if (x === 2) {
          done(new Error('x should be 1'))
        } else {
          done()
        }
      }, 100)
    }
    logRejectError(fn)
    logRejectError(fn)

    hello()
  })
})