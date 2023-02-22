module.exports = async function (context, req) {
  const date = "2023-02-22T20:10:35.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

