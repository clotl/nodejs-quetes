const express = require("express");
const app = express();
const port = 3000;
const connection = require("./conf");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// requête GET -> Récupération de l'ensemble des données de ta table
// app.get("/travels/", (req, res) => {
//   //Requête pour savoir si erreur, le descriptif  sera stockée dans la variable err, pour envoyer message au client et l'avertir. Si tout s'est bien passé, le résultat de la requête SQL sera stocké dans la variable results.
//   connection.query("SELECT * from countries", (err, results) => {
//     if (err) {
//       //Si erreur survenue, on informe l'utilisateur de l'erreur
//       res.status(500).send("Error when recovering travels");
//     } else {
//       //Si tout s'est bien passé, on envoie le résultat SQL en tant que Json.
//       res.json(results);
//     }
//   });
// });

// requête GET (light) -> Récupération de quelques champs spécifiques (id, names, dates, etc...)
app.get("/travels/name/", (req, res) => {
  connection.query("SELECT name from countries", (err, results) => {
    if (err) {
      res.status(500).send("Error when recovering travels");
    } else {
      res.json(results);
    }
  });
});

// requête GET  -> Récupération d'un ensemble de données en fonction d'un filtre "contient"
// app.get("/travels/", (req, res) => {
//   connection.query("SELECT * from countries WHERE name LIKE '%la%'  ", (err, results) => {
//     if (err) {
//       res.status(500).send("Error when recovering travels");
//     } else {
//       res.json(results);
//     }
//   });
// });

// requête GET  -> Récupération d'un ensemble de données en fonction d'un filtre "commence par"
// app.get("/travels/", (req, res) => {
//   connection.query("SELECT * from countries WHERE name LIKE 'u%'  ", (err, results) => {
//     if (err) {
//       res.status(500).send("Error when recovering travels");
//     } else {
//       res.json(results);
//     }
//   });
// });

// requête GET  -> Récupération d'un ensemble de données en fonction d'un filtre "supérieur à"
// app.get("/travels/", (req, res) => {
//   connection.query("SELECT * from countries WHERE number > 1  ", (err, results) => {
//     if (err) {
//       res.status(500).send("Error when recovering travels");
//     } else {
//       res.json(results);
//     }
//   });
// });

// requête GET  -> Récupération de données ordonnées (ascendant)
// app.get("/travels/", (req, res) => {
//   connection.query("SELECT * from countries ORDER BY id ASC", (err, results) => {
//     if (err) {
//       res.status(500).send("Error when recovering travels");
//     } else {
//       res.json(results);
//     }
//   });
// });

// requête GET  -> Récupération de données ordonnées (descendant)
// app.get("/travels/", (req, res) => {
//   connection.query("SELECT * from countries ORDER BY number DESC", (err, results) => {
//     if (err) {
//       res.status(500).send("Error when recovering travels");
//     } else {
//       res.json(results);
//     }
//   });
// });

// requête POST  -> Sauvegarde d'une nouvelle entité
// app.post("/travels/", (req, res) => {
//   const formData = req.body;
//   connection.query("INSERT INTO countries SET ?", formData, (err, results) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("Error when recovering countries");
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// requête PUT  -> Modification d'une entité
// app.put("/travels/:id", (req, res) => {
//   const idCountry = req.params.id;
//   const formData = req.body;
//   connection.query("UPDATE countries SET ? WHERE id = ?", [formData, idCountry], err => {
//     if (err) {
//       res.status(500).send("Error when modify countries");
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${port}`);
});
