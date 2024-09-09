module.exports = async function (context, req) {
  const date = "2024-09-09T18:14:40.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

