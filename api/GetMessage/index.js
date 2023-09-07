module.exports = async function (context, req) {
  const date = "2023-09-07T16:11:23.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

