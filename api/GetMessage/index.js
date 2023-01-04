module.exports = async function (context, req) {
  const date = "2023-01-04T22:09:20.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

