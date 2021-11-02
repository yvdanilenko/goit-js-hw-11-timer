//  timer Repeta

const refs = {
  timerField: document.getElementById('#timer-1'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
}
console.log(refs.hours)

const timer = {
  start() {
    const startTime = Date.now()

    setInterval(() => {
      const currentTime = Date.now()
      const deltaTime = currentTime - startTime
      const { hours, mins, secs } = getTimeComponents(deltaTime)

      console.log(`${hours}:${mins}:${secs}`)

      //   console.log(currentTime - startTime)
    }, 1000)
  },
}

timer.start()

function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  )
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))

  const secs = pad(Math.floor((time % (1000 * 60)) / 1000))

  return { hours, mins, secs }
}

function pad(value) {
  return String(value).padStart(2, '0')
}
