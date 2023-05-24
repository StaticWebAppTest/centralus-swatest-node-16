module.exports = async function (context, req) {
  const date = "2023-05-24T02:05:59.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

