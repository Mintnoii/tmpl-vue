/**
 *  时间格式化
 * */
export const formatTime = (time: number) => {
  let second = Math.ceil(time / 1000)
  const s = second % 60
  second = Math.floor(second / 60)
  const m = second % 60
  second = Math.floor(second / 60)
  const h = second % 60
  return {
    s,
    m,
    h,
    str: `${h === 0 ? '' : `${h < 10 ? '0' : ''}${h}:`}${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`
  }
}

export const catchError = <T, U = Error>(
  promise: Promise<T>,
  errorExt?: object
): Promise<[U, undefined] | [null, T]> => {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        const parsedError = Object.assign({}, err, errorExt)
        return [parsedError, undefined]
      }

      return [err, undefined]
    })
}
