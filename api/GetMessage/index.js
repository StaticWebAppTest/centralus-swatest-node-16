module.exports = async function (context, req) {
  const date = "2023-04-26T02:01:34.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

