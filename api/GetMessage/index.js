module.exports = async function (context, req) {
  const date = "2023-03-26T16:10:51.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

