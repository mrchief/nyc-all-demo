import test from 'ava'
import multiply from './multiply'

test('generates sequences', t => {
  let result = multiply(10, 20)

  t.is(result, 200)
})