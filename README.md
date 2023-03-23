# Redgifs-dl

Download gifs from Redgifs in the CLI.

<br>

### Usage

Without installing:

```shell
npx redgifs-dl

```

With install:

```shell
redgifs-dl
```

#### For use in a project

```js
const { download } = require("redgifs-dl")
```

#### For use in a module

```js
import { download } from "redgifs-dl"
```

##### _Note:_ Direct download link provided is restricted to the current IP.

<br>

### Install

```shell
npm i -g redgifs-dl
```

<br>

### Methods

### download() Generates direct download link

#### Params: [url]

~~~js
await download(url)
    .then(console.log)
    .catch((error) => console.log(error))
~~~

<br>

### Uninstall

```shell
npm uninstall redgifs-dl
```

<br>

### License

AGPL-3.0 ©️ Zubin