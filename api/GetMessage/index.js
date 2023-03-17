module.exports = async function (context, req) {
  const date = "2023-03-17T06:11:30.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

