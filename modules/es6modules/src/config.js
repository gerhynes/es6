// Named export
export const apikey = "abc123";

// Default export
// export default apikey;
// A default export gets renamed as whatever you import it as

// A module can have only one default export but multiple named exports

export const url = "https://wesbos.com";

export function sayHi(name) {
  console.log(`Hello there ${name}`);
}

const age = 100;
const dog = "Snickers";

export { age as old, dog };
