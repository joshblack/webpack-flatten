`webpack-flatten`
=================

Build tool to flatten files located in `src` into a `lib` folder in order to maintain global unique of filenames. Then, define a webpack build process that will access the `lib` folder generated for you.

## Flattens modules

When I say flatten modules, I mean that:

```
+-- src
|---- core
|------ bar.js
|---- foo.js
```

becomes

```
+-- lib
|---- bar.js
|---- foo.js
```

To get this feature, you just have to specify `@providesModule` in a comment block in your code. For example, if we were adding this comment to the `foo` module we might say:

```js
/**
 * Copyright of Foobar Inc.
 * All rights reserved.
 *
 * @providesModule foo
 */

// ...
```

And now in `bar` we can just

```js
// No more relative paths!
var foo = require('foo');
```
