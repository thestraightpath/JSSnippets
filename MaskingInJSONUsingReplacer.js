//Mask data values in JSON using replacer function

var obj = {
  "SystemName": "W01BD2X1",
  "UserLogin": "43434343",
  "UserName": "AM12Service",
  "Token": "abcd-efg-hij-klm-nopq",
  "RemediationSoftwareList": [{
    "RemediationID": "REM00010090",
    "SoftwareProductName": "Docker for Windows",
    "RemovalType": "userAffirmation",
    "ExecutablesList": [{
      "Path": "c:\\rajani\\test\\test1.exe"
    }]
  }]
}

//test
console.log(JSON.stringify(obj, function(key, val) {
  if (key == "Token") {
    if (val) {
      val = "****" + val.substring(val.length - 4, val.length);
    }
  }
  return val;
}));
