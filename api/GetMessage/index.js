module.exports = async function (context, req) {
  const date = "2023-07-30T04:09:35.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

