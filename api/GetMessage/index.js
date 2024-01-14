module.exports = async function (context, req) {
  const date = "2024-01-14T15:08:41.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

