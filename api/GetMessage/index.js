module.exports = async function (context, req) {
  const date = "2023-07-06T16:13:29.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

