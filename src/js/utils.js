export function documentScrollTop() {
  return document.documentElement.scrollTop || document.body.scrollTop
}

export function elementOffsetTop(element) {
  const rect = element.getBoundingClientRect()
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return rect.top + scrollTop
}

export function elementHeight(element) {
  const styles = window.getComputedStyle(element)
  const height = element.offsetHeight
  const borderTopWidth = parseFloat(styles.borderTopWidth)
  const borderBottomWidth = parseFloat(styles.borderBottomWidth)
  const paddingTop = parseFloat(styles.paddingTop)
  const paddingBottom = parseFloat(styles.paddingBottom)
  return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom
}

export function browserIsMSIE() {
  const ua = window.navigator.userAgent
  return -1 !== ua.indexOf('MSIE ') || -1 !== ua.indexOf('trident')
}
