module.exports = async function (context, req) {
  const date = "2024-06-26T12:19:58.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

