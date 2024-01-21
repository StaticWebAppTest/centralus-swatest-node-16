module.exports = async function (context, req) {
  const date = "2024-01-21T04:11:11.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

