module.exports = async function (context, req) {
  const date = "2022-12-24T10:08:57.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

