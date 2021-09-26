const translate = require('@vitalets/google-translate-api');
const pool =  require('../utils/db');

exports.test = async (req, res) => {
  return res.json("Hello World");
};

exports.trans = async (req, resp) => {
  // console.log(req.body); 

  to_trans = req.body.to_trans;
  from = req.body.from;
  to = req.body.to;

  translate(to_trans, {from: from, to: to}).then(async res => {
      // console.log(res);
      console.log(res.text);

      (await pool).query(`INSERT INTO translate (TEXT, TRANS_TEXT, FROM_LANG, TO_LANG) VALUES (${JSON.stringify(to_trans)}, ${JSON.stringify(res.text)}, ${JSON.stringify(from)}, ${JSON.stringify(to)});`).then((result) => {
        console.log(result);
      });

      // console.log(res.from.text.autoCorrected);
      // console.log(res.from.text.value);
      // console.log(res.from.text.didYouMean);
  }).catch(err => {
      console.error(err);
      return resp.json(err);
  });  
};
