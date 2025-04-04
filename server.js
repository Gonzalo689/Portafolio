const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Configurar nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

app.post("/send", (req, res) => {
  const { Name, Email, Subject, Message } = req.body;

  const mailOptions = {
    from: Email,
    to: process.env.EMAIL_USER,
    subject: Subject,
    text: `Nombre: ${Name}\nCorreo: ${Email}\n\nMensaje:\n${Message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return res.status(500).send(error.toString());
    res.send("Mensaje enviado correctamente.");
  });
});


// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
