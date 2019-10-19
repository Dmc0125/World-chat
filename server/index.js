const express = require('express');
const monk = require('monk');
const cors = require('cors');
const Filter = require('bad-words');
const rateLimit = require('express-rate-limit');
const volleyball = require('volleyball');

const app = express();

const db = monk(process.env.MONGO_URI || 'localhost/chater');
const comments = db.get('comments');
const filter = new Filter();

app.enable('trust proxy');

app.use(cors());
app.use(express.json());
app.use(volleyball);

app.use(
  rateLimit({
    windowMs: 30000,
    max: 1,
  })
);

app.get('/', (req, res) => {
  res.json({
    message: 'Database for Comment posting app',
  });
});

// get comments from database to /comments route
app.get('/comments', async (req, res) => {
  const { sort = 'desc' } = req.query;

  const postedComments = await comments.find({}, { sort: { createdAt: sort === 'desc' ? -1 : 1 } });

  res.json({
    sort,
    comments: postedComments,
  });
});

// checks if comment is valid
const isValid = comment => {
  const { name, message } = comment;
  return name
    && name.toString().trim().length > 2
    && name.toString().length <= 50
    && message
    && message.toString().trim().length > 2
    && message.toString().length <= 200
};

// send/insert a comment to a database
app.post('/comments', (req, res) => {
  if (isValid(req.body)) {
    const { name, message } = req.body;

    const comment = {
      name: filter.clean(name.toString().trim()),
      message: filter.clean(message.toString().trim()),
      createdAt: new Date(),
    };

    comments.insert(comment).then(newComment => res.json(newComment));
  } else {
    res.status(422);
    res.json({
      message: 'Name and content are required!',
    });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, console.log('Listening on http://localhost:' + port));
