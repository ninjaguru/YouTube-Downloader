# YouTube-Downloader

An All-in-One App To Make Viewing and Downloading YouTube Videos Easy

## Ready To Use Downloads

To download precompiled version of YouTube-Downloader that are ready to use, please visit the [Releases](https://github.com/hsoj95/YouTube-Downloader/releases) section to download the app for your OS* version.

### **Windows Users*

Windows users will need to build the app using Node.JS as I am unable to build a Windows version to OS constraints on my end. I hope to have this issue remedied 

## Installation

You must have Node.JS version 8.9 to run this app. Download it here: [Node.JS](https://nodejs.org/en/)

After copying these files to a folder, navigate to it from the terminal and type `npm install` to download the needed packages for it. After this is finished, you can run the program by typing `electron-forge start`. You can look at [NPM: Electron-Forge](https://www.npmjs.com/package/electron-forge) for more commands you can use with it.

## Usage

The app will open to the front page of YouTube. From here, you can either sign in, or search for a video or channel. Upon finding a video you want to download, click the download button in the bar at the top. A message will appear saying that it is downloading and to please wait for it to finish. When the green check mark appears, you are safe to close the program or start another download.

*Please Note:*

You cannot have simultaneous downloads going at once, at least not yet. This will be fixed in the future, but for now, you have to wait for one download to finish before beginning another. Issues may also arise from downloading a video that has an identical name to another video already downloaded. This issue has been mostly fixed by including the video uploader's name at the end of the video title. However, the possibility still exist for both the uploader and title to be identical. If this happens, the previously downloaded video will be overwritten. Hopefully, this issue can be fully resolved in the future, but for now you are highly unlikely to run into the issue. It's just something that you need to be aware of in niche situations.

## Special Thanks

To the Reddit communities of [/r/Node](https://www.reddit.com/r/node/) and [/r/Electronjs](https://www.reddit.com/r/electronjs/) for helping me to solve several issues with learning the peculiarities of Node.JS and Electron!

## Resources Used

[Node.JS](https://nodejs.org/en/)

[Electron](https://electron.atom.io/)

[NPM: Electron-Forge](https://www.npmjs.com/package/electron-forge)

[node-youtube-dl](https://github.com/przemyslawpluta/node-youtube-dl)

[Material.io Icons](https://material.io/icons/)
