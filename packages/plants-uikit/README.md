# 🥞 Plants UIkit

[![Version](https://img.shields.io/npm/v/@defiplants/uikit)](https://www.npmjs.com/package/@defiplants/uikit) [![Size](https://img.shields.io/bundlephobia/min/@defiplants/uikit)](https://www.npmjs.com/package/@defiplants/uikit)

Plants UIkit is a set of React components and hooks used to build pages on Plants's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @defiplants/uikit`

## Setup

### Theme

Before using Plants UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@defiplants/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@defiplants/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
