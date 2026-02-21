# Password Strength Checker

A lightweight, accessible, and performant React component that provides real-time feedback on password complexity. It features a dynamic progress bar, visual strength indicators, and a visibility toggle.

## 🚀 Features

* **Real-time Analysis:** Instant feedback as the user types.
* **Visual Progress Bar:** Smooth CSS transitions for width and color changes.
* **Visibility Toggle:** Toggle between masked and plain text for better UX.
* **Accessibility (a11y):** Uses semantic buttons, ARIA labels, and `aria-live` for screen readers.
* **Optimized Performance:** Uses `useMemo` to handle strength calculations without unnecessary re-renders.

## 📊 Strength Criteria

The password strength is calculated based on 5 specific requirements:

1.  **Length:** Minimum of 8 characters.
2.  **Uppercase:** At least one capital letter ($A-Z$).
3.  **Lowercase:** At least one lowercase letter ($a-z$).
4.  **Numbers:** At least one digit ($0-9$).
5.  **Special Characters:** At least one symbol (e.g., `$`, `!`, `@`, `#`).

### Strength Thresholds

| Score | Label | Color |
| :--- | :--- | :--- |
| 0 - 2 | **Weak** | Red (#ff0054) |
| 3 - 4 | **Medium** | Orange (#fe804d) |
| 5 | **Strong** | Green (#3fbb60) |

## 🛠️ Installation

1. **Install dependencies:**
   This component uses [Lucide React](https://lucide.dev/) for icons.
   ```bash
   npm install lucide-react
   ```

2. **Add the Component:**
    Copy the *App.jsx* code into your project and ensure your CSS includes the necessary classes for styling.
