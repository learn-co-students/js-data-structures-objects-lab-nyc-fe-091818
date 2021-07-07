// Write your solution in this file!
let driver = {
} 

function updateDriverWithKeyAndValue(driver,key,value) {
const driverCopy = {...driver} //spread operator - take everything and spread to new object
//{name: Sam}
driverCopy[key] = value
return driverCopy
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value) {
 driver [key] = value
return driver
}

function deleteFromDriverByKey(driver,key){
  const driverCopy = {...driver}
  delete driverCopy[key]
  return driverCopy
}

function destructivelyDeleteFromDriverByKey (driver,key) {
  const driverCopy = {...driver}
  delete driver [key]
  return driver
}