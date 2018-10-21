module.exports = {
  wrapHtml: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>staticky</title>
</head>
<body>
</body>
</html>`,
  socketSctipt: `  <script src="/socket.io/socket.io.js"></script>
  <script>
    window.onload = function() {
      const socket = io();
      socket.on('reload', () => {
        window.location.reload();
      })
    }
  </script> `
}