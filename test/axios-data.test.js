QUnit.module('AXIOS MODULE', {})

QUnit.test('TEST getData (aysnc)', async assert => {
  assert.expect(1) // expect one async test
  const ans = await getData()
  const len = ans.length
  console.info(`RETRIEVED ${len} records`)
  assert.notEqual(0, len, 'Length is not zero')
})
