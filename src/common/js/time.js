export function formatTime () {
  let date = new Date()
  let day = date.getDate()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let second = date.getSeconds()
  let sp = '-'
  let sp1 = ':'
  let time = year+sp+month+sp+day+' '+hours+sp1+minutes+sp1+second
  return time
}
