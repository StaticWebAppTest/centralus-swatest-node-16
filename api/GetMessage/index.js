module.exports = async function (context, req) {
  const date = "2023-08-18T12:15:26.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

