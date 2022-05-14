module.exports = async function (context, req) {
  const date = "2022-05-14T16:13:58.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

