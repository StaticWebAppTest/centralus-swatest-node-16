module.exports = async function (context, req) {
  const date = "2023-02-22T07:09:34.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

