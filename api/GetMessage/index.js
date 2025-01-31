module.exports = async function (context, req) {
  const date = "2025-01-31T03:12:48.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

