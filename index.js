// Write your code in this file!

const currentUser = "Grace Hopper";

// Fixing welcomeMessage
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Fixing excitedWelcomeMessage
const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;

// Fixing shortGreeting
const shortGreeting = `Welcome, ${currentUser[0]}!`;

// Exporting variables for testing
module.exports = {
  currentUser,
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting
};