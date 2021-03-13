const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sport', { useNewUrlParser: true, useUnifiedTopology: true });

const Player = require('./models/player');
const Team = require('./models/team');
const User = require('./models/user');


// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
// import body parser module
// create express application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/getAllPlayers', (req, res) => {
  Player.find((err, docs) => {
    if (err) {
      console.log('err with DB');
    }
    else {
      res.status(200).json({
        allPlayers: docs

      });
    }



  })

});
app.post('/addPlayers', (req, res) => {
  console.log("here in post ", req.body);
  const player = new Player({

    name: req.body.name,
    poste: req.body.poste,
    age: req.body.age,
    numero: req.body.numero,
    description: req.body.description
  });
  player.save().then(
    (data) => {
      if (data) {
        res.status(200).json(
          {
            message: 'player added with success'
          }
        )
      }

    }

  )


});


app.get('/getPlayerById/:id', (req, res) => {
  Player.findOne({ _id: req.params.id }).then(
    (data) => {
      res.status(200).json(
        {
          player: data
        }
      )
    }
  )
  console.log("here in get by ID ", req.body);

});
app.delete("/deletePlayer/:id", (req, res) => {
  console.log(" delete player by Id ", req.params.id);
  Player.deleteOne({ _id: req.params.id }).then(res.status(200).json({
    message: 'player deleted with success'
  }

  ))
})
app.put("/editplayer/:id", (req, res) => {

  console.log("new player", req.body);

})
app.post('/api/singup', (req, res) => {
  bcrypt.hash(req.body.pwd, 10).then(
    (cryptedPwd) => {
      const user = new User({

        lastname: req.body.lastname,
        firstname:req.body.firstname,
        email: req.body.email,
        pwd: cryptedPwd


      })

      user.save().then(
        res.status(200).json(
          {
            message: 'user added with success'
          }
        )
      )

    })
})

app.post('/api/singup', (req, res) => {
  bcrypt.hash(req.body.pwd, 10).then(
    (cryptedPwd) => {
      const user = new User({

        firstname:req.body.firstname,
        email: req.body.email,
        pwd: cryptedPwd


      })

      user.save().then(
        res.status(200).json(
          {
            message: 'user added with success'
          }
        )
      )

    })
})



/*app.get('/getAllTeams', (req, res) => {
  team.find((err,docs)=>
  {
    if(err){
      console.log('err with DB');
    }
    else{
      res.status(200).json({
        allTeams: docs

    });
  }
 


  })

});
app.post('/addTeams', (req, res) => {
  console.log("here in post ", req.body);
  const team = new Team({
    
    name: req.body.name,
    country: req.body.country,
    foundation: req.body.foundation,
    stadium: req.body.stadium
   
  });
  team.save().then(
    (data) => {
      if (data) {
        res.status(200).json(
          {
            message: 'team added with success'
          }
        )
      }

    }

  )


});


app.get("/getteamById/:id", (req, res) => {
  console.log("here in get by ID ", req.body);

});
app.delete("/deleteteam/:id", (req, res) => {
  console.log(" delete team by Id ", req.params.id);
})
app.put("/editteam/:id", (req, res) => {

  console.log("new team", req.body);
})

*/
module.exports = app;

