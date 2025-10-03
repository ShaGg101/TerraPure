# TerraPure React Application

This is a React.js conversion of the TerraPure HTML website. The application promotes healthy hydration and features Wilkins Distilled Water products.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Shopping Cart**: Add/remove products with persistent cart state
- **Smooth Animations**: CSS animations for water purification process
- **7-Day Challenge**: Interactive hydration challenge signup
- **Product Showcase**: Multiple Wilkins water sizes with pricing
- **Contact Forms**: Bulk order inquiries and general contact

## Components

- `Navigation`: Fixed navigation with mobile menu and cart icon
- `HeroSection`: Animated hero section with 8-step purification visualization
- `BenefitsSection`: Health benefits of proper hydration
- `WilkinsSection`: Why choose Wilkins water features
- `ProductsSection`: Product catalog with add-to-cart functionality
- `ChallengeSection`: 7-day hydration challenge signup
- `StatisticsSection`: Philippines hydration statistics
- `ContactSection`: Contact information and getting started guide
- `Footer`: Site links and social media
- `CartModal`: Shopping cart overlay with checkout functionality

## Custom Hooks

- `useCart`: Context-based cart management with add/remove/total calculations

## Installation

1. Navigate to the project directory:
   ```
   cd terrapure-react
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser to `http://localhost:3000`

## Build for Production

```
npm run build
```

## Technologies Used

- React 18
- Tailwind CSS (via CDN)
- React Context API for state management
- CSS animations and keyframes
- Responsive design principles

## Key Differences from Original HTML

1. **Component-based Architecture**: Modular React components for better maintainability
2. **State Management**: React Context for cart functionality instead of vanilla JavaScript
3. **Event Handling**: React event handlers instead of inline onclick attributes
4. **Responsive Design**: Better mobile responsiveness with React state for menu toggles
5. **Reusable Components**: Data-driven rendering for products, benefits, and features

## Customization

- Update product data in `ProductsSection.js`
- Modify animations in `App.css`
- Adjust colors and styling through Tailwind classes
- Add new sections by creating components and importing them in `App.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- React's virtual DOM for efficient rendering
- Component lazy loading ready
- Optimized animations with CSS transforms
- Minimal re-renders with proper state management
