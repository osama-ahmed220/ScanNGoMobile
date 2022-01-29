# Scan&Go Mobile.

# Getting Started
1. Install deps with YARN. Please use yarn.
`$ yarn`

2. Please follow the instruction to install xcode or android studio ([here](https://reactnative.dev/docs/environment-setup))

3. Once setup completed go to ios directory and run `$ pod install`

4. Make sure physical device (Mobile device (Android or iPhone)) is connected with the system, Because QR code scanner and Native SMS service will not work on iOS Simulator and Android Emulator.

5. To run the application on Mobile run this command.

- For Android
`$ yarn react-native run-android`

- For iOS
`$ yarn react-native run-ios`

# Backend Service
To List all the orders from individual User. Get Request on this URL `https://scan-and-go-backend.herokuapp.com/api/scans/{{Full Name}}`