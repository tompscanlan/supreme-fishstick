import { describe, it, expect } from 'vitest'

describe('Moo', () => {
  it('should work', (ctx) => {
    // prints name of the test
    console.log(ctx.task.name)
  })
})
