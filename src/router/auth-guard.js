const isAuthenticatedGuard = (to, from, next) => {
  return new Promise(() => {
    const random = Math.random() * 100

    if (random > 50) {
      console.log('authenticated')
      next()
    } else {
      console.log('blocked')
      next({ name: 'pokemon-home' })
    }
  })
}

export { isAuthenticatedGuard }
