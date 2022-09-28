module.exports = async function (context, req) {
  const date = "2022-09-28T20:14:23.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

