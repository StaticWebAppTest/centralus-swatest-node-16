module.exports = async function (context, req) {
  const date = "2022-05-01T12:18:23.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

