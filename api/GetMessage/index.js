module.exports = async function (context, req) {
  const date = "2022-07-31T18:12:02.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

