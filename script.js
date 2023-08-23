//your JS code here. If required.
// This file is not to be modified. Please ignore this.
// We will understand all of this later in the course.
// DO NOT MODIFY THIS FILE


  // res.sendFile(path.join(__dirname + '/main.html'));
 let browserInfo = document.getElementById("browser-info");
            let browser = navigator.userAgent;
            let browserName = navigator.appName;
            let version = navigator.appVersion;
            browserInfo.innerHTML = "You are using " + browserName + " version " + version;