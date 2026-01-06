# AI Image Generation Guide

To create premium HD ice cream images for this project, use the following AI prompts with your preferred image generator (DALL-E, Midjourney, Stable Diffusion, etc.):

## Image Prompts

### Hero Image (`/images/hero-icecream.jpg`)
```
Ultra realistic premium ice cream scoop in a waffle cone, studio lighting, soft pastel background, premium food photography, 4K, professional commercial quality, creamy texture, appetizing, high detail
```

### Vanilla Dream (`/images/vanilla.jpg`)
```
Ultra realistic vanilla ice cream scoop, Madagascar vanilla bean specks, creamy white texture, studio lighting, premium food photography, 4K, professional commercial quality, soft shadows
```

### Chocolate Bliss (`/images/chocolate.jpg`)
```
Ultra realistic dark chocolate ice cream scoop, rich dark brown color, glossy texture, studio lighting, premium food photography, 4K, professional commercial quality, chocolate drizzle
```

### Strawberry Fields (`/images/strawberry.jpg`)
```
Ultra realistic strawberry ice cream scoop, fresh strawberry swirls, pink creamy texture, studio lighting, premium food photography, 4K, professional commercial quality, natural lighting
```

### Mint Chip (`/images/mint.jpg`)
```
Ultra realistic mint chocolate chip ice cream scoop, mint green base with dark chocolate chunks, studio lighting, premium food photography, 4K, professional commercial quality
```

### Salted Caramel (`/images/caramel.jpg`)
```
Ultra realistic salted caramel ice cream scoop, golden caramel swirls with sea salt crystals, studio lighting, premium food photography, 4K, professional commercial quality
```

### Cookies & Cream (`/images/cookies.jpg`)
```
Ultra realistic cookies and cream ice cream scoop, white base with chocolate cookie chunks, studio lighting, premium food photography, 4K, professional commercial quality
```

### Pistachio Delight (`/images/pistachio.jpg`)
```
Ultra realistic pistachio ice cream scoop, pale green with pistachio nut pieces, studio lighting, premium food photography, 4K, professional commercial quality, natural tones
```

### Mango Sorbet (`/images/mango.jpg`)
```
Ultra realistic mango sorbet scoop, vibrant orange color, smooth texture, studio lighting, premium food photography, 4K, professional commercial quality, tropical feel
```

## Image Specifications

- **Format**: JPG or PNG
- **Resolution**: Minimum 1024x1024px (prefer 2048x2048px or higher)
- **Style**: Premium food photography, studio lighting
- **Background**: Clean, soft, or transparent
- **Quality**: 4K, high detail, professional

## Usage

Place all generated images in the `/public/images/` directory with the exact filenames specified above.

Example structure:
```
/public/
  /images/
    hero-icecream.jpg
    vanilla.jpg
    chocolate.jpg
    strawberry.jpg
    mint.jpg
    caramel.jpg
    cookies.jpg
    pistachio.jpg
    mango.jpg
```

## Alternative: Use Remote URLs

If you prefer to host images remotely, update the `image` property in the product arrays to use full URLs:

```tsx
{ id: 1, name: 'Vanilla Dream', price: 4.99, image: 'https://your-cdn.com/images/vanilla.jpg', ... }
```

Make sure to update:
- `components/layout/ProductGrid.tsx`
- `components/layout/ProductDetail.tsx`
- `components/cards/ProductCard.tsx`