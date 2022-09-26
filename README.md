# Getting Started

## Installation

```
npm install --save @reactivers/shortlink

yarn add @reactivers/shortlink
```

## Usage

```ts
import {linkShorter} '@reactivers/shortlink'

const getShortlink = async () => {
  const {shortlink} = await linkShorter({link: "https://hooks.reactivers.com"})
  console.log("shortlink", shortlink);
}

```