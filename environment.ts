
export const environment = process.env
export const PATH_TYPE = <string>environment.PATH_TYPE || ''
export const NODE_ENV = environment.NODE_ENV || ''
export const isDevMode = Object.is(NODE_ENV, 'development')
export const isProdMode =
  Object.is(NODE_ENV, 'production') && Object.is(PATH_TYPE, 'production')

export const isBrowser = process && process.browser
