export default {
  model: {
    "pages": [
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
    ]
   },
  data: null
}