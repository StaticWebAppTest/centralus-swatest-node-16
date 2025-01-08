module.exports = async function (context, req) {
  const date = "2025-01-08T14:11:20.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

