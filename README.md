# Modal Window

A simple, lightweight modal window implementation using vanilla HTML, CSS, and JavaScript.

## Description

This project demonstrates how to create interactive modal windows that can be triggered by button clicks. The implementation includes an overlay effect that darkens and blurs the background when a modal is active, and provides multiple ways to close the modal (close button, clicking outside the modal, or pressing the Escape key).

## Features

- Clean, minimalist UI design
- Three trigger buttons that open the same modal window
- Smooth overlay with backdrop blur effect
- Multiple ways to close the modal:
  - Close (×) button
  - Clicking on the overlay
  - Pressing the Escape key
- Responsive design
- Simple and readable code structure

## Project Structure

- `index.html` - The HTML structure with buttons and modal markup
- `style.css` - Styling for the buttons, modal window, and overlay
- `script.js` - JavaScript functionality to handle modal interactions

## Technical Implementation

### HTML
- Three button elements to trigger the modal
- Modal container with close button, heading, and content
- Overlay div for background effect

### CSS
- Modern gradient background
- Button styling with hover effects
- Positioning for centered modal overlay
- Use of `transform: translate(-50%, -50%)` for perfect centering
- Z-index management for proper layering
- Backdrop filter for blur effect on the overlay
- `.hidden` utility class for toggling visibility

### JavaScript
- Event listeners for all interactive elements
- Functions to open and close the modal
- Keyboard event handling (Escape key)
- Class manipulation to show/hide elements

## How It Works

1. When a user clicks any "Show modal" button, the `openModal()` function is called
2. This function removes the "hidden" class from both the modal and overlay elements
3. The modal appears centered on the screen with a darkened, blurred background
4. The modal can be closed by:
   - Clicking the × button
   - Clicking anywhere on the overlay
   - Pressing the Escape key
5. Closing adds the "hidden" class back to both the modal and overlay elements

## Getting Started

1. Download all three files (`index.html`, `style.css`, and `script.js`)
2. Keep them in the same directory
3. Open `index.html` in a web browser

## Browser Compatibility

This project uses modern CSS features like `backdrop-filter` which may not be supported in all browsers. For best experience, use recent versions of Chrome, Firefox, Safari, or Edge.

## Customization

- Modify the content inside the modal in the HTML file
- Adjust colors, sizes, and animations in the CSS file
- Add additional functionality through the JavaScript file

## Potential Enhancements

- Add open/close animations
- Create multiple different modals with unique content
- Implement form functionality within the modal
- Add accessibility features (focus trapping, ARIA attributes)
- Create a reusable modal component class
