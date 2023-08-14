module.exports = async function (context, req) {
  const date = "2023-08-14T20:08:50.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

