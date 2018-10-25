"use strict";

class Scheduler {
  constructor() {
    this.scheduleTimes = [];
    this.availableTime = true;
    this.newTime = '';
  }

  // returns true if there’s room to schedule at ‘time’
  CouldScheduleAt(time) {
    console.log('inside could schedule');
      console.log(time);
    if(time == '' || time == undefined){return false}
    time = stringToDate(time);

    let newBeforeTime = time.getTime() - 10*60000;
    let newAfterTime = time.getTime() + 10*60000;
    // console.log(this.scheduleTimes);
    if(this.scheduleTimes.length < 1) {
      this.availableTime = true;
      console.log('Disponible para reservar: ' + giveTimeFormat(time));
    } else {
      this.newTime = time;
      this.availableTime = true;
      for (let oldTime of this.scheduleTimes) {
        oldTime = stringToDate(oldTime);
        if (oldTime == time && oldTime.getTime() == newAfterTime && oldTime.getTime() == newBeforeTime) {
          console.log(1);
          this.availableTime = false;
          this.newTime = '';
          break;
        } else if ((Math.abs(oldTime.getTime() - newAfterTime) < 2*60000)) {
          console.log(2);
          this.availableTime = false;
          this.newTime = '';
          break;
        } else if ((Math.abs(oldTime.getTime() - newBeforeTime) < 2*60000)) {
          console.log(3);
          this.availableTime = false;
          this.newTime = '';
          break;
        } else if ((Math.abs(oldTime.getTime() - newBeforeTime - 2*60000) < 2*60000)) {
          console.log(3);
          this.availableTime = false;
          this.newTime = '';
          break;
        } else if ((Math.abs(oldTime.getTime() - newBeforeTime - 2*60000) < 2*60000)) {
          console.log(3);
          this.availableTime = false;
          this.newTime = '';
          break;
        }
      };
      this.availableTime ?
      console.log('Disponible: ' + giveTimeFormat(time)) : console.log('No disponible: ' + giveTimeFormat(time));
    }
    return this.availableTime;
  }

  // returns true if we successfully scheduled
  ScheduleAt(time=''){
    console.log('inside schedule at');

    if(time == '') {
      time = this.newTime;
      if(typeof time == 'string') {
        time = stringToDate(time);
      }
    } else {
      time = stringToDate(time);
    }
    this.CouldScheduleAt(time);
    if(this.availableTime) {
      time = giveTimeFormat(time);
      this.scheduleTimes.push(time);
      console.log(this.scheduleTimes);
      return this.availableTime;
    }
    return false;
  }

  // Choose an available time to schedule at, and return true if get that time
  Schedule() {
    console.log('inside schedule');

    let count = 0;
    while(this.availableTime) {
      let rTime = randomTime(new Date("2018-08-20 00:00:00"), new Date("2018-08-20 23:55:00"));
      this.CouldScheduleAt(rTime);
      if(this.availableTime) {
        console.log("La hora disponible para el vuelo es: " + giveTimeFormat(rTime));
        this.newTime = giveTimeFormat(rTime);
        return true;
      } else {
        console.log("Aun buscando...");
        count++;
      }
      if(count>=10) {
        console.log("Por el momento, el sistema se encuentra saturado. Por favor intentar mas tarde");
        return false;
      }
    }
  }

  // returns true if we successfully unscheduled something
  UnscheduleAt(time){
    console.log('inside unschedule at');
    //delete value from array
    let index = this.scheduleTimes.indexOf(time);
    console.log(index);
    if(index < 0) {
      console.log("No se encuentra el horario indicado");
      return false;
    }

    this.scheduleTimes.splice(index, 1);
    console.log(this.scheduleTimes);
    console.log("Value deleted from scheduled Times");
    return true;
  }
}

function randomTime(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function giveTimeFormat(time) {
  time = time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false});
  return time;
}

function stringToDate(time) {
  if(typeof time == "string") {
    return new Date("2018-08-22 " + time + ":00");
  } else {
    return time;
  }
}

// console.log(randomTime(new Date(2017, 8, 10), new Date()).toLocaleTimeString());

export default Scheduler;
