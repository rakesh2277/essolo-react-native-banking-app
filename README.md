#Installation

Development
1.Clone this repo.
2.Go to project folder ex.cd essolo
3.Run npm install.
4.Ensure a device, or emulated Android image is connected (adb devices).
  Note->if not connected (got to project folder esssolo/android  
  make file local.properties and paste 
  sdk.dir=your_sdk_path /Android/Sdk     )
5.Run react-native run-android.
 if running on a device, run adb reverse tcp:8081 tcp:8081.
