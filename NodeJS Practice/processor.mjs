import url from "url";
import fs from "fs";

function renderHTML(path, response) {
  fs.readFile(path, "utf8", function (error, data) {
    response.write(data);
    response.end();
  });
}

export default function requestProcessor(request, response) {
  const path = url.parse(request.url).pathname;

  switch (path) {
    case "/":
      renderHTML("index.html", response);
      break;

    case "/login.html":
      renderHTML("login.html", response);
      break;

    default:
      response.write("Non existing page!");
      response.end();
  }
}
