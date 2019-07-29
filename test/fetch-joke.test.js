QUnit.module('FETCH MODULE', {})

QUnit.test('TEST getJoke (aysnc)', async assert => {
  assert.expect(2) // expect two async tests
  const ans = await getJoke()
  const len = ans.length
  console.info(`FETCHED ${len} characters: ${ans}`)
  assert.notEqual(0, len, 'Length is not zero')
  assert.notEqual(ans, 'No joke for you', 'Answer is not default')
})
