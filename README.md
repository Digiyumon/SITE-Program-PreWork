# Pre-work - _Al's game!_

**Al's game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Alejandro Ojeda-Celis**

Time spent: **3** hours spent in total

Link to project: (https://candied-rain-editor.glitch.me/)

## Required Functionality

The following **required** functionality is complete:

- [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [X] "Start" button toggles between "Start" and "Stop" when clicked.
- [X] Game buttons each light up and play a sound when clicked.
- [X] Computer plays back sequence of clues including sound and visual cue for each button
- [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [X] User wins the game after guessing a complete pattern
- [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [X] Buttons use a pitch (frequency) other than the ones in the tutorial
- [X] More than 4 functional game buttons
- [ ] Playback speeds up on each turn
- [X] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

## Video Walkthrough (GIF)

![Alt Text](https://i.imgur.com/Kxfxlzr.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   [Stack Overflow, DelftStack, mdn web docs]

2. What was a challenge you encountered in creating this submission? How did you overcome it? 
   [I was having trouble creating the random pattern every time the player presses start. For some reason at some point it created 2 different arrays for pattern so it would light up one box whenever it was actually another. I ended up googling some solutions for my issues and I was able to figure out what part of the issue was. But nothing gave me a definitive answer for my situation so I ended up doing some debugging on my own and I figured out that I just have to move a part of a method into another. ]

3. What questions about web development do you have after completing your submission?
   [How do you implement files such as images and sounds to a website? Because I have worked with some file work because of school or personal projects but I never have implemented them into a website. ]

4. If you had a few more hours to work on this project, what would you spend them doing?
   [I would create a better looking UI because right now it is very bland and boring. It would be cool to get an image as the background in order to liven up the feeling of the website. Also I would like to add a little UI that shows hearts as lives but I'm not sure how to implement that to the current website.]

## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/dlp9ME-qF_w)

## License

    Copyright [Alejandro Ojeda-Celis]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
