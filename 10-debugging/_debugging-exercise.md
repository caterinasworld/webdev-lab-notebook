# Debugging Exercise

## Debugging and Code Review

This exercise is an opportunity to look through a website and debug some of the issues with the code.

Take a look the [sample-website](./sample-website/) folder, which contains code written by Yiming Lin, a longtime TA for this course. There are several issues in the code you were given, ranging from code correctness, semantics, accessibility, responsiveness, and more. There are also optimizations that you can make to the code.

You should aim to find as many significant issues as possible based on what we learned in this class. Not every issue in this codebase will count as a significant issue. Some examples of things that will not count as significant issues are: fixing a typo, renaming a class, etc.

## What is a code review?

A code review is an opportunity to check someone else’s code before it is merged into the main branch for the codebase. Code reviews are typically performed by developers other than the author of the code. The goal of the code review is to check that there are no issues with the code written and that the code written does not introduce new bugs.

In the [code-review.md](./code-review.md) file, you will need to write up all the issues you found. You should describe the issue, explain why it is an issue, and write up the code for the solution. An example of one issue is listed below.

## Code Review Example

### Issue #1: Accessibility

The issue, why this is an issue, and the solution:

The accessibility issue is the "empty button" issue, meaning that the button is either empty or has no value text. A button should also have a value. However sometimes, we might use a glyphicon such as "x" to indicate this button is meant to close the popup modal. To fix this issue, we can add an "aria-label" attribute. It's also a good idea to add the "title" attribute, which will show the "title" of the image as a tooltip when the user hovers over the image.

<img src="../images/code-review-issue.png" height=200 alt="screenshot showing an aaccessibility issue on the image with the close button">

Initial code:

```html
<button class="close-popup-button">
  <i class="fa-solid fa-xmark"></i>
</button>
```

Updated code:

```html
<button
  class="close-popup-button"
  title="close popup button"
  aria-label="close popup button">
  <i class="fa-solid fa-xmark"></i>
</button>
```
