module.exports = async function (context, req) {
  const date = "2025-04-15T15:13:15.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

