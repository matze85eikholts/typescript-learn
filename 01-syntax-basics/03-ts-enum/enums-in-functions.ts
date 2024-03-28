enum AppStatus {
  ACTIVE = 'ACT',
  INACTIVE = 'INACT',
  STANDBY = 'STBY'
}
function readStatus (application: AppStatus): void {
  console.log(application);
}
readStatus(AppStatus.ACTIVE);


const outerFunc = (someValue: number) => (multiplier: number) => someValue * multiplier;
const innerFunc = outerFunc(10);
let result = innerFunc(5);
console.log(result);