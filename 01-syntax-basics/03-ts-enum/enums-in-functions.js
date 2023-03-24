var AppStatus;
(function (AppStatus) {
    AppStatus["ACTIVE"] = "ACT";
    AppStatus["INACTIVE"] = "INACT";
    AppStatus["STANDBY"] = "STBY";
})(AppStatus || (AppStatus = {}));
function readStatus(application) {
    console.log(application);
}
readStatus(AppStatus.ACTIVE);
