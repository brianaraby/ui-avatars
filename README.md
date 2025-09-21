# 🎨 UIAvatars

A tiny, type-safe Node.js utility for generating *initial-based avatars* using the [`canvas`](https://www.npmjs.com/package/canvas) package.  
Perfect for profile pictures, placeholders, and quick avatar generation.

## Features

✅ Supports PNG & SVG output  
✅ Configurable – size, colors, font, rounded option  
✅ Random background color fallback  
✅ Uppercase toggle  
✅ Lightweight & easy to use  

## Installation

```bash
bun add canvas
```
## Usage
```ts
import { UIAvatars } from './UIAvatars';
import * as fs from 'fs';

const Avatar = UIAvatars({
    text: 'Arabys UI',
    size: 512,
    rounded: true,
    bgColor: '#181818',
    textColor: '#FFFFFF',
    fontFamily: 'Manrope'
});

fs.writeFileSync('avatar.png', Avatar);
```
> This will generate a `512x512` rounded avatar with initials `"AU"`.

# License

MIT © 2025 Arabys