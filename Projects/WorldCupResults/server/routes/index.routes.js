const router = require("express").Router();
const express = require('express');
const cors = require('cors');
const axios = require('axios');


router.get("/match", (req, res, next) => {
  const config = {
    headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzY4MDYxYjZjYWNjMDZmNDhlN2ZhNmQiLCJpYXQiOjE2NjgyNjk1OTQsImV4cCI6MTY2ODM1NTk5NH0.alFhplne8N6FS72j9IpgaDOzhXyRiIaY_dITCmbdbLI",
  }}
  axios.get("http://api.cup2022.ir/api/v1/standings", config)
  .then(resp=> res.json(resp.data))
  .catch(err=> console.log(err))
  //res.json({name: "matias"});
});

router.get("/match", (req, res, next) => {
  const config = {
    headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzY4MDYxYjZjYWNjMDZmNDhlN2ZhNmQiLCJpYXQiOjE2NjgyNjk1OTQsImV4cCI6MTY2ODM1NTk5NH0.alFhplne8N6FS72j9IpgaDOzhXyRiIaY_dITCmbdbLI",
  }}
  axios.get("http://api.cup2022.ir/api/v1/match", config)
  .then(resp=> res.json(resp.data))
  .catch(err=> console.log(err))
  //res.json({name: "matias"});
});


router.get("/match", (req, res, next) => {
  const config = {
    headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzY4MDYxYjZjYWNjMDZmNDhlN2ZhNmQiLCJpYXQiOjE2NjgyNjk1OTQsImV4cCI6MTY2ODM1NTk5NH0.alFhplne8N6FS72j9IpgaDOzhXyRiIaY_dITCmbdbLI",
  }}
  axios.get("http://api.cup2022.ir/api/v1/match", config)
  .then(resp=> res.json(resp.data))
  .catch(err=> console.log(err))
  //res.json({name: "matias"});
});
module.exports = router;
