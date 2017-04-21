var app = require("http").createServer(handler),
  io = require("socket.io").listen(app),
  fs = require("fs"),
  sys = require("sys"),
  twitter = require("twitter");

app.listen(1337);

var twit = new twitter({
  consumer_key: "h3bHH98BFxV9DnbtagGgVogop",
  consumer_secret: "YY0qfvD6eKMfSSowXOAZFvSUZY93wf92fcvNCtHxyNud9iICJ6",
  access_token_key: "2799739823-ubQ9errnExS3lWSowtHos4a45xdEGtLaZgKe8Ss",
  access_token_secret: "Pkzee8x3WuUz7t5J5p8C3GDu67GKnYdcNaMLQPABHcPum"
});

function handler(req, res) {
  fs.readFile(__dirname + "/index.html", function(err, data) {
    if (err) {
      res.writeHead(500);
      return res.end("Error loading index.html");
    }

    res.writeHead(200);
    res.end(data);
  });
}

var twee = io.of("tweet");

twit.stream(
  "statuses/filter",
  { locations: "-180,-90,180,90", track: "trump" },
  stream => {
    let tweets = 0;
    stream.on("data", function(data) {
      tweets += 1;
      io.sockets.emit("tweet", data);
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      process.stdout.write(`tweets : ${tweets}`);
    });
  }
);
