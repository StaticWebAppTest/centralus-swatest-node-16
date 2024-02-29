module.exports = async function (context, req) {
  const date = "2024-02-29T23:08:53.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

