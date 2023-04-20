module.exports = async function (context, req) {
  const date = "2023-04-20T20:09:29.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

