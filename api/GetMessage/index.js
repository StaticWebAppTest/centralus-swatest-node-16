module.exports = async function (context, req) {
  const date = "2024-01-05T01:51:47.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

