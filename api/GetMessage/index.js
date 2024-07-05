module.exports = async function (context, req) {
  const date = "2024-07-05T02:29:16.286Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

