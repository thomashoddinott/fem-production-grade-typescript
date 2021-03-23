### Introduction

TypeScript is a programming language, compiler, and a language server.

It is a 'syntactic superset' of JS.

Provides the core of the best JS environment.

You can think of TS as a *fancy linter*, and a static analysis tool.

**What problems does TS solve?**

Duck typed languages start to hurt more as codebases get large.

Informal contracts grow organically, formal ones grow deliberately.

VScode is a great IDE for TypeScript. Both projects are maintained by Microsoft, so figures that the tools work great together.

Too many JS errors are discovered at runtime --> TS Compiler help us.

**Demo app** - We'll be working on a Slack clone.

We'll also work out a strategy for migrating a JS codebase to TS.

DefinitelyTyped - types for libraries like `React` and `lodash`

### Course Project Setup

https://github.com/mike-north/professional-ts/

- Didn't need `volta` 

- Removed this line `// "plugins": ["@babel/plugin-proposal-class-properties"]` from `.babelrc`  - we don't need it?
- Changed port to 1234 in `index.js`

### Volta

Defines version of node and yarn, but not interested atm.

### Optional Chaining & Nullish Coalescing

```typescript
// optional chaining
let x: {
    user: {
        name: string;
        address?: {
            street: string;
            city: string;
        }
    }
} = undefined as any;

console.log(x.user.address?.city);
// needs an optional chaining ? - it will terminate early is address is undefined --> returns: string | undefined
```

```typescript
class Foo {
    #name: string; // private fields - truly private - only this class has access - and can be safely overided in subclasses
    constructor(rawName?: string) {
        this.#name = rawName ?? '(no name)'
        // not the same as || --> evaluates as falsy, but not 'nullish'
    }
    log () {
        console.log(this.#name)
    }
}

export * as mylib from './data/channels' // import libs easily
```

### Tuple Types & Recursive Type Aliases

```typescript
type Foo<T extends any[]> = [boolean, ...T, boolean];
// makes it simpler to type out some more complicated functions
```

```typescript
type Address = [
    streetNumber: number,
    city: string,
    state: string,
    postal: number];
// labelled tuple types - makes autocompleting fns like printAddress() straightforward

function printAddress(...address: Address) {
    // ...
}
printAddress(10, 'New Town', 'New State', 1234)
```

```typescript
type JSONValue =
    | string
    | number
    | boolean
    | null
    | JSONValue[]
    | {
        [k: string]: JSONValue;
    };
// a recursive type alias - refers to itself, twice!

const val: JSONValue = {
    name: 'mike',
    adress: {
        street: 'Spear St',
    }
}
```

```typescript
type Corner = `${'top' | 'bottom'}—${'left' | 'right'}`;
// represents all the type permutations
```

<img src="img/image-20210323142904132.png" alt="image-20210323142904132" width=600 />

### ts-ignore, ts-expect-error

<img src="img/image-20210323143743244.png" alt="image-20210323143743244" width=600 />

### Error Handling with Unknown

https://frontendmasters.com/courses/production-typescript/error-handling-with-unknown/





