module.exports = async function (context, req) {
  const date = "2023-07-14T03:21:48.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

