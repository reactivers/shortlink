# Getting Started

## Installation

```
npm install --save @reactivers/shortlink

yarn add @reactivers/shortlink
```

## Usage

```ts
import { shortenLink } '@reactivers/shortlink'

const getShortlink = async () => {
  const {shortlink} = await shortenLink({link: "https://hooks.reactivers.com"})
  console.log("shortlink", shortlink);
}

```
