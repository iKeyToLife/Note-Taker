# Note-Taker

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock-Up](#mock-up)
- [Installation](#installation)
- [Features](#features)
- [Key Routes](#key-routes)
- [Technologies](#technologies)
- [Repository Link](#repository-link)
- [Deployed Application](#deployed-application)

## Description
This project is a web application called "Note Taker" developed using Express.js. The primary goal of the application is to provide users with a simple and convenient way to write and save notes.

## User Story

```md
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```md
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears
```
## Mock-Up

The following GIF shows the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./public/assets/images/11-express-homework-demo.gif)

## Installation

To install the application, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
3. Install the dependencies:
   ```bash
   npm install
4. Start server:
   ```bash
   npm start

## Features

- Users can create, save, and view notes.
- Notes are stored in a JSON file on the server.
- Each note has a unique identifier.
- The user interface allows for easy switching between existing notes and creating new ones.
- The application is deployed on the Render platform.

## Key Routes

- `GET /notes` - returns the notes page.
- `GET *` - returns the application's landing page.
- `GET /api/notes` - returns all saved notes in JSON format.
- `POST /api/notes` - saves a new note and returns it to the client.
- `DELETE /api/notes/:id` - delete notes by id.

## Technologies

- Express.js - backend framework.
- Node.js - runtime environment.
- fs module - for file system operations.
- JSON - for storing note data.
- Render - platform for application deployment.

## Repository Link
[Note Taker Repository](https://github.com/iKeyToLife/Note-Taker)

## Deployed Application
[Note Taker Application](https://note-taker-hed0.onrender.com/)