module.exports = async function (context, req) {
  const date = "2024-01-21T00:49:35.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

