module.exports = async function (context, req) {
  const date = "2023-01-04T16:17:26.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

