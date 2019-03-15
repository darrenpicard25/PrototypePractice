class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }
  addPlayList(newPlayList) {
    this.playlists.push(newPlayList);
  }
}

class Playlist {
  constructor(name) {
    this.playlistName = name;
    this.tracks =[];
  }
  addTrack (newTrack) {
  this.tracks.push(newTrack);
}
  overallRating () {
    let totalRating = 0;
    this.tracks.forEach( track => {
      totalRating += track.rating;
    });
    return totalRating / this.tracks.length;
  }

  totalDuration  () {
    let totalLength = 0;
    this.tracks.forEach( track => {
      totalLength += track.length;
    });
    return totalLength / this.tracks.length;
  }
}

class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

let darrensMusic = new Library('All music', 'Darren');
let bestPlayList = new Playlist("The Best Hits");
let track1 = new Track ('Piano Music', 4, 100);
let track2 = new Track ('Death metal', 1, 85);
let track3 = new Track ('cat song', 2, 500);



bestPlayList.addTrack(track1);
bestPlayList.addTrack(track2);
bestPlayList.addTrack(track3);

darrensMusic.addPlayList(bestPlayList);
