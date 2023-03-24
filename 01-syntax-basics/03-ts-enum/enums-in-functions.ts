enum AppStatus {
  ACTIVE = 'ACT',
  INACTIVE = 'INACT',
  STANDBY = 'STBY'
}
function readStatus (application: AppStatus): void {
  console.log(application);
}
readStatus(AppStatus.ACTIVE);