module.exports = async function (context, req) {
  const date = "2023-09-27T05:08:22.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

