import test from 'ava'
import m from './'

test('folder links', t => {
  const fixtures = [
    'https://mega.nz/#F!n85ERTjJ!_OuiQelnEHafYWa16I_G9A',
    'https://mega.nz/#F!4nhVHbZb!pvcGQDzChvMDs8uL_Sw1dwQ'
  ]

  for (const x of fixtures) {
    t.true(m().test(x))
    t.false(m({folder: false}).test(x))
  }
})

test('file links', t => {
  const fixtures = [
    'https://mega.nz/#!sOphlKhZ!zVy1J-3h7UmUhmsPUEgKk790xvxKsWQ8aR2to10artg',
    'https://mega.nz/#!APRDiDra!GbCKJJMVrXTQyUDr8EwY10gp833z-9-85rqKojqgGHs'
  ]

  for (const x of fixtures) {
    t.true(m().test(x))
    t.false(m({file: false}).test(x))
  }
})

test('match links in text', t => {
  const fixture = `
    Download https://mega.nz/#F!n85ERTjJ!_OuiQelnEHafYWa16I_G9A
    <a href="https://mega.nz/#!sOphlKhZ!zVy1J-3h7UmUhmsPUEgKk790xvxKsWQ8aR2to10artg">
      example.com
      https://mega.nz/#!sOphlKhZ
    </a>
  `
  t.deepEqual([
    'https://mega.nz/#F!n85ERTjJ!_OuiQelnEHafYWa16I_G9A',
    'https://mega.nz/#!sOphlKhZ!zVy1J-3h7UmUhmsPUEgKk790xvxKsWQ8aR2to10artg'
  ], fixture.match(m()))
})

test('do not match link', t => {
  const fixtures = [
    'https://mega.nz/#F!n85ERTjJ!_OuiQelnEHafYWa16I_G9A download',
    'http://mega.nz/#F!n85ERTjJ!_OuiQelnEHafYWa16I_G9A',
    'https://mega.nz/#F!********!**** download',
    'https://mega.nz/#F!********!****',
    'https://mega.nz/#F!********',
    'https://mega.nz/#F!',
    'https://mega.nz'
  ]

  for (const x of fixtures) {
    t.false(m({exact: true}).test(x))
  }
})
