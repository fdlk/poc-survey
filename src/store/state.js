export default {
  username: 'admin',
  model: {
    "pages": [
      {
        "name": "start",
        "elements": [
          {
            "type": "html",
            "name": "question1",
            "html": "<h1>Author entry</h1>\n<p>Welcome! Let's find out your favorite author...</p>"
          }
        ],
        "title": "Author"
      },
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "name",
            "title": "Name"
          },
          {
            "type": "panel",
            "name": "panel1"
          },
          {
            "type": "paneldynamic",
            "name": "books",
            "title": "Books",
            "description": "The author's books",
            "templateElements": [
              {
                "type": "text",
                "name": "title",
                "title": "Title"
              }
            ]
          }
        ],
        "title": "OneToMany test",
        "description": "Enter an author and his books"
      }
    ],
    "firstPageIsStarted": true,
    "showCompletedPage": true,
    "surveyShowDataSaving": true,
    "processedCompletedHtml": "<h1>thanks!</h1>"
  },
  location: null
}