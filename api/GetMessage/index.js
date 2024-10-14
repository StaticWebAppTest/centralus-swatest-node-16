module.exports = async function (context, req) {
  const date = "2024-10-14T11:10:45.399Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

