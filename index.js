module.exports = opts => {
  opts = Object.assign({folder: true, file: true}, opts)

  const protocol = 'https://'
  const host = 'mega.nz'
  const folder = opts.folder ? '#F' : ''
  const file = opts.file ? '#' : ''
  const id = '[a-zA-Z0-9]{0,8}'
  const key = '[a-zA-Z0-9_-]+'
  const regex = `${protocol}${host}/(${folder}|${file})!${id}!${key}`

  return opts.exact ? new RegExp(`(^${regex}$)`, 'i') : new RegExp(regex, 'ig')
}
