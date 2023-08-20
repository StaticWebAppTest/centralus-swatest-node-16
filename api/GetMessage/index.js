module.exports = async function (context, req) {
  const date = "2023-08-20T09:07:09.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

