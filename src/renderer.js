const remote = require('electron').remote;
const { app } = require('electron').remote;
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const ById = function (id) {
  return document.getElementById(id);
};
const path = require('path');

let back = ById('back'),
  forward = ById('forward'),
  refresh = ById('refresh'),
  dev = ById('console'),
  close = ById('close'),
  download = ById('download'),
  view = ById('view');

function reloadView() {
  view.reload();
}

function backView() {
  view.goBack();
}

function forwardView() {
  view.goForward();
}

function handleDevtools() {
  if (view.isDevToolsOpened()) {
    view.closeDevTools();
  } else {
    view.openDevTools();
  }
}

function downloadVideo() {
  const fs = require('fs');
  const youtubedl = require('youtube-dl');
  const video = youtubedl(view.getURL(),
      // Optional arguments passed to youtube-dl.
      ['--format=best[ext=mp4]'],
      // Additional options can be given for calling `child_process.execFile()`.
      { cwd: __dirname });

  video.on('info', (info) => {
      if (document.getElementById('finished').classList.contains('firstLoad')) {
          document.getElementById('finished').classList.remove('firstLoad');
      }
    document.getElementById('downloading').classList.toggle('hidden');
    document.getElementById('finished').classList.toggle('hidden');
  });

  video.on('end', () => {
    setTimeout(() => {
      document.getElementById('downloading').classList.toggle('hidden');
      document.getElementById('finished').classList.toggle('hidden');
    }, 2500);
  });

  const url = view.getURL();
  const options = ['--format=best[ext=mp4]'];
  youtubedl.getInfo(url, options, (err, info) => {
    if (err) throw err;
    video.pipe(fs.createWriteStream(`${`${app.getPath('home')}/Downloads/${info.title}`}.mp4`));
  });
}

refresh.addEventListener('click', reloadView);
back.addEventListener('click', backView);
forward.addEventListener('click', forwardView);
dev.addEventListener('click', handleDevtools);
close.addEventListener('click', () => {
  const window = remote.getCurrentWindow();
  window.close();
});
download.addEventListener('click', downloadVideo);

