# Layefa's Console Critter

A simple, charming arcade-style game built in C# for the console. Guide your critter to munch on food and see how their state changes!

---

## About The Game

Layefa's Console Critter is a lightweight, snakelike game that runs directly in your Windows Command Prompt or PowerShell. You control a text-based character that moves around the console window, aiming to collect different types of "food" items.

Each food item has a unique effect on your critter:
* `@@@@@`: Normal food (resets critter to default state).
* `$$$$$`: Boost food (makes your critter faster temporarily).
* `#####`: Sick food (makes your critter freeze for a moment).

The goal is simple: navigate, eat, and see how long you can keep your critter happy (or at least, not sick!).

---

## Features

* **Console-Based Graphics:** Experience classic ASCII-style gaming.
* **Dynamic Player States:** Your critter changes appearance based on what they eat.
* **Simple Controls:** Easy-to-learn arrow key navigation.
* **Randomized Food Spawns:** Every game is a fresh challenge.
* **Terminal Resize Detection:** The game gracefully exits if the console window is resized.

---

## How to Play

1.  **Run the Executable:**
    * Navigate to the `bin/Debug/netX.X` (or `bin/Release/netX.X`) folder within the project directory.
    * Double-click `LayefaConsoleCritter.exe` (or whatever you name the compiled `.exe`).
    * Alternatively, open Command Prompt or PowerShell, navigate to the project directory, and run `dotnet run`.

2.  **Controls:**
    * **Arrow Keys (Up, Down, Left, Right):** Move your critter.
    * **Escape (Esc):** Exit the game.

3.  **Objective:** Move your critter to the food items to "eat" them. Watch out for different food types and their effects!

---

## Getting Started (For Developers)

### Prerequisites

* [.NET SDK (LTS version recommended)](https://dotnet.microsoft.com/download)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YourUsername/LayefaConsoleCritter.git](https://github.com/YourUsername/LayefaConsoleCritter.git)
    cd LayefaConsoleCritter
    ```
2.  **Build the project:**
    ```bash
    dotnet build
    ```
3.  **Run the game:**
    ```bash
    dotnet run
    ```

---

## Project Structure

* `Program.cs`: Contains all the game logic, including the main game loop, player movement, food generation, and state management.
* `LayefaConsoleCritter.csproj`: The project file for the C# console application.

---

## Contributing

Feel free to fork this repository, make improvements, or add new features! Pull requests are welcome.

---

## License

This project is open-source and available under the [MIT License](LICENSE.md).

---

## Author

[Your Name/GitHub Username]

---

**Enjoy the game!**
