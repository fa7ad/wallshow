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
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let Wallpapers = glob.sync(path.join(directory, '**/*.*'));

  console.log('Press Ctrl+C twice to exit.');
  console.log('Press ENTER to skip any wallpaper.');

  const selectWallpaper = () => {
    let url = _.pullAt(Wallpapers, _.random(0, Wallpapers.length - 1))[0];

    wallpaper.set(url).then(console.log(`Wallpaper set to ${url}`));
    if(Wallpapers.length === 1){
      clearInterval(TheInterval);
      rl.close();
      return;
    }
  }
  var TheInterval = setInterval(selectWallpaper, (interval*1000)+1);
  rl.on('line', selectWallpaper);
}

if(require.main === module){
  if(!process.argv[2]){
    console.log('No directory specified.');
    console.log('Run "wallshow -h" to see help.');
  }else if(process.argv[2] === '-h' || process.argv[2] === '--help'){
    console.log(helpDoc);
  }else{
    cycleWallpapers(process.argv[2], process.argv[3]||15);
  }
}

module.exports = cycleWallpapers;
