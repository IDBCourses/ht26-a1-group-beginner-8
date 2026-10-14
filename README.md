# Our instrument

**Play it here:** <!-- Paste your GitHub Pages link here, e.g. https://idbcourses.github.io/ht26-a1-group-01/ -->

**Group:** <!-- Names of everyone in the group -->

<!-- One or two sentences: what kind of instrument is it, and what is it like to play? -->

## How to play

<!-- Which keys do what? Fill in the table, and add a row for every key or group of keys. -->

| Key | What it does                                                |
| --- | ----------------------------------------------------------- |
| `A` | Plays a C4 while you hold it down (the example: replace it) |
|     |                                                             |

<!-- Anything else a player needs to know: how to get started, combinations of keys, a good thing to try first. -->

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

### Run it

1. Open `index.html`, then run **Live Preview: Show Preview (External Browser)** from the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
2. Open the browser's developer tools (`F12`, or `Cmd+Option+I` on a Mac) and click the **Console** tab.
3. Click on the page, then hold down `A`. You should hear a note, and see `Key down: a` in the console.

### The live page

Every time something is merged into `main`, GitHub publishes it at the link at the top of this README. It takes a minute or two. To find the link: on github.com, go to **Settings → Pages**.

---

## Working together

`main` is what you hand in and what you show at the showcase on 21 October, so **`main` must always run**. Nobody works on `main` directly: every change goes on a branch, and comes back to `main` through a pull request that a groupmate has reviewed. GitHub won't let you merge without an approval.

### The steps, for every task

1. **Pull `main`.** Switch to `main` (click the branch name in the bottom-left corner of VS Code), then click **Sync Changes** (or **Pull**) in the Source Control panel.
2. **Make a branch** for one task. Click the branch name in the bottom-left corner → **Create new branch…**. Name it after the feature, not the person: `drone`, `octave-keys`, `echo-effect`.
3. **Commit and push** to your branch. Commit small and often. The first time, click **Publish Branch**. Keep the branch short: a day or two at most.
4. **Bring in the latest `main`** before you open the pull request. Switch to `main` and pull. Switch back to your branch, then run **Git: Merge Branch…** from the Command Palette and choose `main`. If there's a conflict, see below. Run your code to check it still works, then push.
5. **Open a pull request** on github.com (GitHub shows a **Compare & pull request** button after you push). Fill in the three sections: _What changed_, _How to test it_, _Anything you're unsure about_. Ask a groupmate to review it.
6. **A groupmate reviews.** See below.
7. **The author merges** once it's approved: **Merge pull request** on github.com. Then click **Delete branch**.

Spread the work: everyone writes code, and everyone reviews. Each of you should open pull requests and review other people's.

### Reviewing a pull request

Reading the code isn't enough. You need to run it.

1. Commit or push any work of your own first.
2. In VS Code, click the branch name in the bottom-left corner and choose the branch to review (it starts with `origin/`).
3. Run it with Live Preview and follow the _How to test it_ steps. Does it do what the pull request says? Does everything that worked before still work?
4. On github.com, open the pull request → **Files changed** → **Review changes**. Say what you tested and what you heard. Choose **Approve**, or **Request changes** and say what needs to change.
5. Switch back to your own branch.

"Looks fine" is not a review.

### When you get a conflict

A conflict means two branches changed the same lines, and Git can't tell which version to keep. It's normal, and nothing is lost. You decide.

1. The Source Control panel lists the conflicting files under **Merge Changes**. Open one.
2. Each conflict shows two versions: **Current** (your branch) and **Incoming** (`main`). Above each one, click **Accept Current Change**, **Accept Incoming Change** or **Accept Both Changes**. Or edit the lines by hand until they're right.
3. Make sure no `<<<<<<<`, `=======` or `>>>>>>>` lines are left in the file.
4. Save, then click **+** next to the file to stage it.
5. When every file is done, click **Commit**, then push.
6. **Run the code.** A conflict you've resolved can still break the program.

To have fewer conflicts: pull `main` often, keep branches short, and agree who works in which file. Two people working on the same function at the same time will get a conflict.

If you're stuck, stop and ask a TA or teacher. Don't delete the folder and clone again, and don't force anything.
