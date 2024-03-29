# Introduction

A professional looking theme that is printable and easily usable as HTML. 

# Features

Based on the flat theme, with the following changes / enhancements:

 * Added print page margin
 * Changed color scheme
 * Added icons for contact and profiles
 * Moved skills higher in the list
 * Changed skills to be listed horizontally
 * Added support for "Present" or "Current" positions in Work section
 * Removed protocol prefixes for URLs (for printability)
 * Made some of the URLs hyperlinked
 * Made bullets a little easier to see

# Requirements

* nodejs
* resume-cli

# Installation

```
npm install jsonresume-theme-hired
```

 # Usage

 Generate PDF File:
 ```
 resume export resume-output.pdf --format pdf --resume .\resume-input.json --theme hired
 ```

Generate HTML File:
 ```
 resume export resume-output.html --format html --resume .\resume-input.json --theme hired
 ```

 # Screenshots

**PDF / Printed Page Margins**
 ![PDF Screenshot](sample-pdf.png?raw=true)

**HTML**
 ![HTML Screenshot](sample-html.png?raw=true)