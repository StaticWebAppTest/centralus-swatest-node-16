module.exports = async function (context, req) {
  const date = "2023-05-22T14:08:32.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

