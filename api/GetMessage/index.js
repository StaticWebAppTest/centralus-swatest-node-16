module.exports = async function (context, req) {
  const date = "2023-04-29T19:06:29.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

