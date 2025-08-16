# Reinigung KI Platform - Product Requirements Document

Professional cleaning service website with AI capabilities for a Cologne-based cleaning company, featuring automated customer interactions, quote generation, and service management.

**Experience Qualities**:
1. **Professional** - Clean, trustworthy design that instills confidence in business customers
2. **Efficient** - Zero-friction user experience with instant quotes and seamless booking
3. **Intelligent** - AI-powered interactions that understand customer needs and provide personalized solutions

**Complexity Level**: Complex Application (advanced functionality, accounts)
- Requires multiple integrated systems including AI chat, payment processing, admin panel, and automated content generation

## Essential Features

### Homepage with Hero Section
- **Functionality**: Professional landing page with clear value proposition and call-to-action
- **Purpose**: Convert visitors into leads and establish credibility
- **Trigger**: User visits website
- **Progression**: Hero visual → USP messaging → service overview → CTA button → contact form
- **Success criteria**: Clear understanding of services offered and easy path to request quote

### AI Chat Assistant
- **Functionality**: Intelligent chatbot that analyzes images/text and generates instant quotes
- **Purpose**: Provide 24/7 customer service and automate quote generation
- **Trigger**: User clicks chat button or types message
- **Progression**: Welcome message → service inquiry → photo/details upload → AI analysis → quote generation → booking option
- **Success criteria**: Accurate quote provided within 2 minutes with booking confirmation

### Service Pages with Dynamic Pricing
- **Functionality**: Detailed service descriptions with sector-specific pricing (medical, hospitality, offices)
- **Purpose**: Educate customers and provide transparent pricing
- **Trigger**: User navigates to services section
- **Progression**: Service category selection → detailed description → pricing calculator → quote request → contact form
- **Success criteria**: Customer understands services and pricing before contact

### Quote Request System
- **Functionality**: Comprehensive form with image upload and instant estimation
- **Purpose**: Capture leads and provide immediate value
- **Trigger**: User clicks "Get Quote" buttons
- **Progression**: Basic info → property details → photo upload → AI analysis → instant estimate → appointment booking
- **Success criteria**: Quote generated and appointment scheduled within 5 minutes

### Admin Dashboard
- **Functionality**: Manage content, view analytics, handle customer requests
- **Purpose**: Enable business owners to control website content and track performance
- **Trigger**: Admin login at /admin
- **Progression**: Authentication → dashboard overview → content management → customer management → analytics
- **Success criteria**: Non-technical staff can update content and manage customers

## Edge Case Handling
- **Offline Mode**: Display offline message and enable email fallback for quotes
- **Image Upload Failures**: Provide text-based alternative for service descriptions
- **AI Unavailable**: Fall back to standard contact form with manual processing
- **Payment Failures**: Offer alternative payment methods and manual invoicing
- **Invalid Uploads**: Clear error messages with acceptable file format guidance

## Design Direction
The design should feel professional, clean, and trustworthy with a modern German aesthetic - emphasizing reliability, efficiency, and premium service quality. Minimal interface serves the core purpose of converting visitors into customers without distractions.

## Color Selection
Complementary (opposite colors) - Professional blue paired with warm accent orange to create trust while maintaining approachability and energy.

- **Primary Color**: Deep Professional Blue (oklch(0.4 0.15 240)) - Communicates trust, reliability, and professionalism
- **Secondary Colors**: Light Gray (oklch(0.95 0.02 240)) for backgrounds, Medium Gray (oklch(0.6 0.05 240)) for supporting text
- **Accent Color**: Warm Orange (oklch(0.7 0.15 40)) - Attention-grabbing highlight for CTAs and important elements
- **Foreground/Background Pairings**: 
  - Background (Light Gray #F8F9FA): Dark Blue text (oklch(0.2 0.1 240)) - Ratio 12.1:1 ✓
  - Card (White #FFFFFF): Dark Blue text (oklch(0.2 0.1 240)) - Ratio 15.8:1 ✓  
  - Primary (Deep Blue): White text (oklch(1 0 0)) - Ratio 7.2:1 ✓
  - Secondary (Light Gray): Dark Blue text (oklch(0.2 0.1 240)) - Ratio 11.5:1 ✓
  - Accent (Warm Orange): White text (oklch(1 0 0)) - Ratio 4.8:1 ✓
  - Muted (Light Blue-Gray): Medium Blue text (oklch(0.4 0.1 240)) - Ratio 5.1:1 ✓

## Font Selection
Typography should convey German precision and professionalism while remaining approachable - using clean, modern sans-serif fonts that emphasize clarity and trustworthiness.

- **Typographic Hierarchy**: 
  - H1 (Page Title): Inter Bold/32px/tight letter spacing
  - H2 (Section Headers): Inter Semibold/24px/normal spacing  
  - H3 (Subsections): Inter Medium/20px/normal spacing
  - Body Text: Inter Regular/16px/relaxed line height
  - Buttons: Inter Medium/14px/uppercase
  - Small Text: Inter Regular/14px/normal spacing

## Animations
Subtle, purposeful animations that enhance usability without feeling gimmicky - reflecting German efficiency and attention to detail with smooth, professional transitions.

- **Purposeful Meaning**: Micro-interactions reinforce the brand's attention to detail and premium service quality
- **Hierarchy of Movement**: Primary CTAs receive subtle hover animations, form interactions provide immediate feedback, page transitions are smooth but quick

## Component Selection
- **Components**: Card components for services, Dialog for quote forms, Button variants for different action types, Form components with validation, Tabs for service categories, Badge for service features
- **Customizations**: Custom hero section with image overlay, specialized upload component for AI analysis, custom pricing calculator widget
- **States**: Buttons show loading states during AI processing, forms provide real-time validation, upload areas show progress and success states
- **Icon Selection**: Phosphor icons for professional, clean aesthetic - cleaning-related icons, checkmarks for features, arrows for navigation
- **Spacing**: Consistent 8px base unit with generous whitespace, 16px for component spacing, 32px for section separation
- **Mobile**: Responsive design with collapsible navigation, stacked layouts on mobile, touch-friendly button sizes, optimized chat interface for mobile