# Blue CoLab Kiosk

A basic Kiosk demo for Blue CoLab.

## Perquisites
1. Install [git](https://git-scm.com/downloads).
   1. Git helps manage the versions of the kiosk. For us it also helps as a way to collaborate and share the code.
2. Install [nodejs](https://nodejs.org/en).
   1. Node is used to run [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) outside your browser. For us we use as node installs [npm](https://www.npmjs.com/) as well. npm is a way to download prewritten code by others that helps the project run.
      1. If you're familiar with python, npm is like [pip](https://pypi.org/project/pip/).
3. Install code editor of your choice.
   1. Suggested [VS Code](https://code.visualstudio.com/).

## Getting Started

1. Clone this repo: In a terminal window run the following:
```bash
git clone https://github.com/bluecolab/react-kiosk
cd react-kiosk
```

2. Install needed dependencies (they help the project run): In a terminal window run the following:
```bash
npm i
```

## Starting the project locally
1. To preview the project: In a terminal window run the following:
```bash
npx expo start
```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

### Build and deploy
Pushing to main automatically start the deployment process. This will take a few minutes. Once ready your changes will be visible here: https://bluecolab.github.io/react-kiosk/
