import uaParserJs from 'ua-parser-js'
import Debug from "../../../node_modules/debug/src/browser.js";

const debug = new Debug("[app] [detect]");

debug.enabled = DEBUG;

var parser = new uaParserJs();
 
debug(parser.getResult());

export const browser = parser.getResult().browser.name && parser.getResult().browser.name.toLowerCase()
export const version = parser.getResult().browser.major && parser.getResult().browser.major.toLowerCase()
export const os = parser.getResult().os.name && parser.getResult().os.name.toLowerCase()
export const device = parser.getResult().device.type && parser.getResult().device.type.toLowerCase()
