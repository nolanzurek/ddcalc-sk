// https://www.reddit.com/r/youtubedl/comments/13izxi0/ytdlp_playlist_to_json/

// does it have to be json? you start by saying you want video id's.

// yt-dlp -s --flat-playlist --print-to-file id,title fileTitle.json "Playlsit URL"
// after loading the playlist pages (each page has 30 videos), it's blazingly fast because the --flat-playlist option means it's not checking each video for extra metadata.

// we just paste the string from the yt-dlp output here
// yeah, this is not scalable. But the script is just for me
let rawData = ``;

const lines = rawData.split("\n");

let data = [];

for (let i = 0; i < lines.length - 1; i++) {
  const line = lines[i];
  i++;
  const titleData = lines[i].split(" ");
  data.push({
    id: line,
    last_name: titleData[0],
    first_name: titleData[1],
    country: titleData[2].substring(1, 4),
    gender: titleData[3],
    // this gets updated manually
    event: "2019 Trampoline Worlds",
    round:
      titleData[titleData.length - 1] === "R1"
        ? "Qualification Exercise 1"
        : "Qualification Exercise 2",
  });
}

console.log(JSON.stringify(data));
