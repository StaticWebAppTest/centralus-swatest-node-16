module.exports = async function (context, req) {
  const date = "2022-12-21T02:05:46.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

