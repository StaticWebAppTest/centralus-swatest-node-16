module.exports = async function (context, req) {
  const date = "2023-03-20T06:13:14.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

