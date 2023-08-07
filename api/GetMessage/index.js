module.exports = async function (context, req) {
  const date = "2023-08-07T19:06:58.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

