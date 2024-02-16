# Frontend Mentor - Interactive card details form

## The challenge

Your challenge is to build out this interactive card details form and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Expected behaviour

- Update the details on the card as the user fills in the fields
- Validate the form fields when the form is submitted
- If there are no errors, display the completed state
- Reset the form when the user clicks "Continue" on the completed state

**⚠️ IMPORTANT ⚠️: When you create the live version of your project, we recommend giving it a random name for the URL. This is because with it being a fake credit card form, some browsers will open a warning notice before people can access your project. So it's best to name the project something unrelated to credit cards so that browsers don't show the warning to people viewing your project.**

## Recommendations & Tips when creating a credit card UI

- Intuitive Layout - Organize the credit card input fields in a logical and easily understandable manner. Align them in the order of card number, expiration date, and CVV code, as they typically appear on a physical credit card. This intuitive layout helps users quickly fill in the required information.

- Card Preview - Display a visual representation of a credit card that updates as users input their information. This card preview helps users verify their entered details and reduces the likelihood of errors.

- Responsive input fields - Implement input fields that automatically format and validate the user’s input as they type. For example, add spaces between every four digits of the card number and automatically move to the next input field when the previous one is completed.

- Input Field Icons - Use icons to represent different input fields, such as a calendar icon for the expiration date and a lock icon for the CVV code. These visual cues help users easily identify the required information.

- Clear Error Messages - Provide specific and actionable error messages when users enter incorrect information. For example, if a user inputs an invalid card number, display a message like “Invalid card number. Please re-enter.” This guidance helps users quickly identify and correct mistakes.

- Card Type Detection - Automatically detect the type of credit card being used (e.g., Visa, Mastercard, American Express) based on the card number, and display the corresponding card logo. This feature not only enhances the user experience but also helps users ensure they’re using the correct card.

- Autofill Support - Integrate support for browser autofill features, which allows users to quickly fill in their credit card information if they’ve saved it in their browser.

- Accessibility - Ensure your credit card UI is accessible to users with disabilities by following accessibility guidelines such as WCAG (Web Content Accessibility Guidelines). Use proper labels, alternative text, and appropriate color contrast to make the UI accessible for users with varying needs.

- Security Assurance - Display security badges or messages to assure users that their credit card information is being handled securely. This helps build trust and confidence in the transaction process.

- Mobile Optimization - this can be done by optimizing the credit card UI for mobile devices by making the input fields large enough for easy tapping, using mobile-friendly keyboards, ensuring responsive design
