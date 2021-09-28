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
      (await pool).query(`SELECT * FROM translate WHERE TEXT = ${JSON.stringify(to_trans)}`).then(async (result) => {
        console.log(result);
        // RowDataPacket {
        //   TEXT: 'Apple',
        //   TRANS_TEXT: 'सेब',
        //   FROM_LANG: 'en',
        //   TO_LANG: 'hi',
        //   ID: 8
        // }
        if(result[0]) {
          console.log("Found cache\n");
          resp.json(result[0].TRANS_TEXT);
        }
        else {
          (await pool).query(`INSERT INTO translate (TEXT, TRANS_TEXT, FROM_LANG, TO_LANG) VALUES (${JSON.stringify(to_trans)}, ${JSON.stringify(res.text)}, ${JSON.stringify(from)}, ${JSON.stringify(to)});`).then(async (to_insert) => {
            console.log("Inserted\n");
            resp.json(res.text);
          });
        }
      });
      // console.log(res.text);

      // console.log(res.from.text.autoCorrected);
      // console.log(res.from.text.value);
      // console.log(res.from.text.didYouMean);
  }).catch(err => {
      console.error(err);
      return resp.json(err);
  });  
};
