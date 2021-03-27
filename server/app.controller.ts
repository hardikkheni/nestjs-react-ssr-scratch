import { Controller, Get } from "@nestjs/common";
import * as fs from "fs";
import * as path from "path";
import { App } from "../client/App";
import ReactDOMServer from "react-dom/server";
import React from "react";

@Controller()
export class AppController {
  @Get()
  sayHello(): string {
    const app = ReactDOMServer.renderToString(React.createElement(App));
    console.log(app);

    const string = fs.readFileSync(
      path.join(process.cwd(), "build", "index.html"),
      {
        encoding: "utf8",
      }
    );
    return string.replace(
      `<div id=\"root\"></div>`,
      `<div id="root">${app}</div>`
    );
  }
}
