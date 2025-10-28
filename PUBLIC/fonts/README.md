# Berlin Sans Font Files

To complete the font setup, please add the following Berlin Sans font files to this directory:

## Required Font Files:
1. **BerlinSansFB-Regular.ttf** - Regular weight (400)
2. **BerlinSansFB-Bold.ttf** - Bold weight (700)

## How to get the font files:
1. Download Berlin Sans FB from a font provider (Google Fonts, Adobe Fonts, or font foundry)
2. Or use the font files you already have on your system
3. Place the .ttf files in this `public/fonts/` directory

## Alternative: Use Google Fonts
If you prefer to use Google Fonts instead of local files, you can modify `app/layout.tsx` to use:

```javascript
import { Berlin_Sans_FB } from 'next/font/google'

const berlinSans = Berlin_Sans_FB({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-berlin-sans',
  display: 'swap',
})
```

## Current Setup:
- Font family: Berlin Sans FB
- Weights: 400 (Regular), 700 (Bold)
- CSS Variable: --font-berlin-sans
- Fallbacks: system-ui, sans-serif
