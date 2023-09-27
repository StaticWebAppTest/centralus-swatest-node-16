module.exports = async function (context, req) {
  const date = "2023-09-27T20:09:17.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

