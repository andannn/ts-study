
let year = document.getElementById('year') as HTMLSpanElement
let thisYear = new Date().getFullYear().toString()

year.setAttribute('datetime', thisYear)
year.textContent = thisYear.toString()
