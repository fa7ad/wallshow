#!/usr/bin/env node
const _ = require('lodash');
const glob = require('glob');
const path = require('path');
const readline = require('readline');
const wallpaper = require('wallpaper');

const helpDoc = `wallshow
USAGE: wallshow <DIR> [<interval>]

<DIR> is the directory where the wallpapers are.
<interval> interval between wallpapers in seconds.
  Defaults to 15 seconds.`;


function cycleWallpapers(directory, interval) {
  let Wallpapers = glob.sync(path.join(directory, '**/*.*'));

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const selectWallpaper = () => {
    let [url] = _.pullAt(Wallpapers, _.random(0, Wallpapers.length - 1));
    wallpaper.set(url).then(console.log(`Wallpaper set to ${url}`));
    if(Wallpapers.length === 0){
      clearInterval(TheInterval);
      rl.close();
      return;
    }
  }


  console.log('Press Ctrl+C to exit.');
  console.log('Press ENTER to skip any wallpaper.');

  let TheInterval = setInterval(selectWallpaper, (interval*1000)+1);

  rl
    .on('line', selectWallpaper)
    .on('SIGINT', () => {
      clearInterval(TheInterval);
      rl.close();
    });
}

if(require.main === module){
  const [,,dirOrHelp, duration] = process.argv;

  if(!dirOrHelp){
    console.log('No directory specified.');
    console.log('Run "wallshow -h" to see help.');
  }else if(dirOrHelp === '-h' || dirOrHelp === '--help'){
    console.log(helpDoc);
  }else{
    cycleWallpapers(dirOrHelp, duration || 15);
  }
}

module.exports = cycleWallpapers;
