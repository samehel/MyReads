# MyReads

### Purpose of this project
________________________________
This project was created for the purpose of completing the react cross-skilling nanodegree program. This web application was developed using ReactJS in version `16.8`.
This application is capable of all the required features and works great. However, there is a single glitch and some warnings that occur due to minor reasons which will be
explained further below.

### How to install and run the project
________________________________
1. Download the project from this repository.
2. Extract the project anywhere.
3. Open the folder and `right-click` in the project directory.
4. Depending on the windows version you are on (10 or 11):
   - Windows 10:
     - Click on the address bar.
     - while it is highlighted, type `cmd`.
     - press `enter`.
   - Windows 11:
     - `right-click` in the project directory.
     - select `Open in terminal`.
5. Type in the command `npm i` or `npm install` to install the node modules.
6. Wait for it to install then type `npm start` and wait for the webpage to open.

### Warnings and their meanings
________________________________
```
src\HomePage.js
  Line 36:47:  Array.prototype.map() expects a value to be returned at the end of arrow function  array-callback-return
  Line 59:47:  Array.prototype.map() expects a value to be returned at the end of arrow function  array-callback-return
  Line 80:47:  Array.prototype.map() expects a value to be returned at the end of arrow function  array-callback-return

src\SearchPage.js
  Line 72:51:  Array.prototype.map() expects a value to be returned at the end of arrow function  array-callback-return
```

These warnings have occured due to the `if` statement surrounding the `return` statement. 

```
src\utils\ISO2LanguageConversion.js
  Line 8:17:   Unreachable code  no-unreachable
  Line 11:17:  Unreachable code  no-unreachable
  Line 14:17:  Unreachable code  no-unreachable
  Line 17:17:  Unreachable code  no-unreachable
  Line 20:17:  Unreachable code  no-unreachable
 ```
 This warning is due to the switch statement implemented within the file, where each case contains a `return` statement. 
 
 ### Glitch
 ________________________________
 When erasing the words too fast from the search bar, it can still display the searched books. Other than that, it functions correctly with no issues.
 
 ### Thank you 
 ________________________________
 
 Thank you to the udacity team for offering a great nanodegree opprutunity and to the Egyptian Ministry of Communications and Information Technology for providing the scholorship.
 


