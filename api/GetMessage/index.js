module.exports = async function (context, req) {
  const date = "2023-02-27T00:53:54.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

