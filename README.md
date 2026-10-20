# Our instrument

**Play it here:** [Group 8 page](https://idbcourses.github.io/ht26-a1-group-beginner-8/)

**Group:** Miguel Pikulik, Samantha Sawyer, Victor Rosen, Ellen Ulvås (?)
Ellen Ulvås <-- Currently is not part of the group as she is reportedly dropping out

**Guitar**
The instrument present in this code is a guitar that features two modes: Jazz and Rock.
Strumming the keys x, c, v, b, n, and m allow for playing a flat note. If the user drags their finger across the keys, it will serve as the "strumming action. Meanwhile, holding down a, s, or d plays the chords.


## How to play

| Key | What it does                                                                  |
| --- | ----------------------------------------------------------------------------- |
| `X` | The first "string" of the guitar that plays a flat note if plucked by itself. |
| `C` | The second "string" of the guitar that plays a flat note if plucked by itself.|
| `V` | The third "string" of the guitar that plays a flat note if plucked by itself. |
| `B` | The fourth "string" of the guitar that plays a flat note if plucked by itself.|
| `N` | The fifth "string" of the guitar that plays a flat note if plucked by itself. |
| `M` | The sixth "string" of the guitar that plays a flat note if plucked by itself. |
| `A` | The first chord that's played by the guitar if held down and "strummed" by the first through sixth keys of the guitar.|
| `S` | The second chord that's played by the guitar if held down and "strummed" by the firsth through sixth keys of the guitar. |
| `D` | The third chord that's played by the guitar if held down and "strummed by the first through sixth keys of the guitar.|
| `Q` | The "switch" mode of the guitar. This switches the guitar from a "jazz" setting to a "rock" setting.|

**How to Start**
To get started, simply click on the browser page and strum away with keys X, C, V, B, N, and M! If you want to change the chord, press and hold keys A, S, or D and strum them to find out! Want to switch to a different setting? This guitar features a "switch" key of Q to switch between Jazz and Rock settings. Happy strumming!
---

## About this assignment

**A1: Modelling.** Build a musical instrument with Tone.js, played with the keyboard. "Instrument" is meant broadly: a drone that shifts as you play, a rhythm machine, a sound toy and a keyboard synth can all count. What matters is that the player has real control over the sound. The full brief and the assessment criteria are on Canvas.

Due **Tuesday 20 October**. Hand in on Canvas: a `.zip` of `main`, and the link to your live page in the submission comment. The link also goes at the top of this README.

### The files

| File         | What goes in it                                                          |
| ------------ | ------------------------------------------------------------------------ |
| `script.js`  | All of your code: settings, state, the sound, the controls and `setup()` |
| `index.html` | The page. Loads Tone.js and `script.js`                                  |
| `style.css`  | How the page looks                                                       |

`script.js` is split into sections with headings. Agree who works in which section, so you get fewer conflicts.

Allowed: vanilla JavaScript and Tone.js. Not allowed: other libraries, and CSS transitions or animations.
