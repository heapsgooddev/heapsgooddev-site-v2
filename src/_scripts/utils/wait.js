/**
 * delay an operation
 * @param {*} timeoutMS milliseconds to wait
 */
export async function wait(timeoutMS = 100) {
  return new Promise(resolve => setTimeout(resolve, timeoutMS));
}
