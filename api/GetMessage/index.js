module.exports = async function (context, req) {
  const date = "2023-08-17T23:08:14.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

