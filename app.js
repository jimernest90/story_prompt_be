const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

//define data function for creating prompts
function createPrompt(id, genre, protagonist, decade, duedate) {
   return {
      id: id,
      genre: genre,
      protagonist: protagonist,
      decade: decade,
      duedate, duedate
   };
}

//define data array for prompts
const prompts = [
   createPrompt(1, "first_genre", "first_pro", "first_decade", "2024-10-20T00:00:00"),
   createPrompt(2, "second_genre", "second_pro", "second_decade", "2024-10-21T00:00:00"),
   createPrompt(3, "third_genre", "third_pro", "third_decade", "2024-10-19T00:00:00")
];
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
   console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (req, res) => {
   //send status of API
   const status = {
      "Status": "Running"
   };

   res.send(status);
});

app.get("/prompts", (req, res) => {
   //send post array as json
   res.status(200).json(prompts)
})

app.get("/prompts/:id", (req, res) => {
   //get id param from request
   const id = req.params.id

   //if prompt exists, send json response
   if (prompt) {
      res.json(prompt)
   } else {
      res.status(404).send('post not found, malformed request')
   }
});

//create post for /prompts
app.post('/prompts', (req, res) => {
   const data = req.body;


   if (data.genre && data.protagonist && data.decade && data.duedate) {
      // If the data is valid, create a new prompt object with a new id
      const newId = prompts.length + 1;
      const newPrompt = new Prompt(newId, data.genre, data.protagonist, data.decade, data.duedate);

      //add new prompt to prompt array
      prompts.push(newPrompt);

      //send a 201 status and new prompt as JSON response
      res.status(201).json(newPrompt)
   } else {
      // If the data is invalid, send a 400 status code and a message
      res.status(400).send('Invalid data');
   }
});

//create route and handler for PUT /posts/:id

app.put("/posts/:id", (req, res) => {

   // Get the id parameter from the request
   const id = req.params.id;

   // Get the data from the request body
   const data = req.body;

   // Validate the data
   if (data.genre && data.protagonist && data.decade && data.duedate) {
      //if the data is valid, find the prompts with given id in the prompts

      if (prompt) {
         post.genre = data.genre;
         post.protagonist = data.protagonist;
         post.decade = data.decade;
         post.duedate = data.duedate;

         //send a 200 status code and updated prompt as json
         res.status(200).json(prompt);
      } else {
         res.status(400).send('invalid data')
      }
   }
})
