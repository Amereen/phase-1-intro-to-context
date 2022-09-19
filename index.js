// Your code here
function createEmployeeRecord (array) {
const object1 = {
  firstName: array[0]   ,
  familyName:  array[1]   ,
  title:   array[2]   ,
  payPerHour:  array[3]   ,
  timeInEvents:    [] ,
  timeOutEvents:   []   ,
}
return object1
}

function createEmployeeRecords(employees){
return employees.map(createEmployeeRecord)

}

function createTimeInEvent(record,date){
const obj2 = {
  type: "TimeIn",
  hour: parseInt(date.split(" ")[1]),
  date: date.split(" ")[0],
}
record.timeInEvents.push(obj2)
return record
}
function createTimeOutEvent(record, date){
const obj3 = {
  type: "TimeOut",
  hour: parseInt(date.split(" ")[1]),
  date: date.split(" ")[0],
}
record.timeOutEvents.push(obj3)
return record
}
 
function hoursWorkedOnDate (record, date){
const timeIN = record.timeInEvents
const timeOut  = record.timeOutEvents
 let time1 = timeIN.find(obj => obj.date === date) 
 let time2 =  timeOut.find(obj => obj.date === date) 
return Math.abs(time1.hour - time2.hour) / 100


 //  console.log(time1.hour,time2.hour)

}

function wagesEarnedOnDate( record , date){
 console.log(record,date)
}