import moment from './moment'

export default class CountdownTimer {
  constructor({selector, targetDate}){
     this.targetDate = targetDate
     this.refs = {
        $days: document.querySelector(`${selector} [data-value="days"]`),
        $hours: document.querySelector(`${selector} [data-value="hours"]`),
        $mins: document.querySelector(`${selector} [data-value="mins"]`),
        $secs: document.querySelector(`${selector} [data-value="secs"]`),
     }
     this.intervalId = null;
  } 

  start(){
   this.intervalId = setInterval(() => {  
      const deltaTime = this.targetDate - Date.now()
      const time = moment(deltaTime)
      this.updateClockFace(time)
    }, 1000)
  }

  updateClockFace({days, hours, mins, secs}){
    const {$days, $hours, $mins, $secs} = this.refs;
    $days.textContent = days
    $hours.textContent = hours
    $mins.textContent = mins
    $secs.textContent = secs
  }
}


