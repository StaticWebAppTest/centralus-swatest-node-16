module.exports = async function (context, req) {
  const date = "2024-06-05T02:26:58.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

