# Quick Notes

Quick Notes is a **React-based note-taking application** designed to keep track of various types of notes such as work tasks, project plans, and meeting agendas. This app showcases the integration of advanced React features, Material UI styling, and local storage persistence.

## Features

- **Add, Edit, and Delete Notes**: Easily manage notes with title and content.
- **Local Storage**: Automatically saves and loads notes for persistence across sessions.
- **Responsive Design**: Built with Material UI for a clean and responsive user interface.

## Demo images
1. Add Notes.

![demo01](https://github.com/user-attachments/assets/7def645d-9580-4dd3-b4fe-2359289318cd)

2. Reload Local Storage After added notes.

![demo02](https://github.com/user-attachments/assets/44b0469d-00c8-40e5-a085-d05d9c5f7d52)

3. Edit and Delete notes.

![demo03](https://github.com/user-attachments/assets/4d160ad5-c69d-46a2-bac4-1012e3555664)

4. Reload Local Storage After Edit or Delete notes.

![demo04](https://github.com/user-attachments/assets/55ec340a-4a25-4d16-9481-71bf40970a59)

## Installation and Setup

### Prerequisites

- **Node.js** (v14 or later)
- **npm** or **yarn**

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SamsonNg00/quick-notes.git
   cd quick-notes
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Run the App**:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

   The app will open in your browser at `http://localhost:3000`.

## Usage

- **Adding a Note**: Enter a title and content, then click **Save**.
- **Editing a Note**: Click **Edit** on any note, make changes, and save.
- **Deleting a Note**: Click **Delete** to remove a note.

## Sample Data for Testing

You can use the following JSON data for testing in Local Storage under the key `notes`:

```json
[
  {
    "id": 1730264318949,
    "title": "Weekly Goals",
    "content": "1. Finish quarterly report\n2. Prepare presentation for client meeting\n3. Review codebase for updates"
  },
  {
    "id": 1730264318950,
    "title": "Project X - Action Items",
    "content": "1. Research competitor features\n2. Complete initial wireframes\n3. Set up team meeting for review"
  }
]
```

## Folder Structure

```
/src
 ├── /components
 │   ├── NotesList.js      # Renders the list of notes
 │   ├── NoteEditor.js     # Editor for adding and editing notes
 │   └── NoteCard.js       # Individual note display with edit and delete options
 ├── App.js                # Main application component
 └── index.js              # Entry point for React
```

## Technologies Used

- **React**: Frontend library for building the user interface.
- **Material UI**: UI framework for styling and responsive design.
- **Local Storage**: Browser API for data persistence.
- **Vite**: Fast development build tool.

## Contributing

Contributions are welcome! If you’d like to improve or add new features:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to your branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact
For any questions, feedback, or suggestions, feel free to reach out:

- **GitHub**: SamsonNg00
- **Email**: samsonnguyen00@gmail.com
