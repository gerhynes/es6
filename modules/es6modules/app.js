import { uniq } from "lodash";
import insane from "insane";
import jsonp from "jsonp";
import { apikey as key, url, sayHi, old, dog } from "./src/config";
import User, { createURL, gravatar } from "./src/user";

const wes = new User("Wes Bos", "wesbos@gmail.com", "wesbos.com");
const profile = createURL(wes.name);
const image = gravatar(wes.email);

console.log(wes);
console.log(profile);
console.log(image);
