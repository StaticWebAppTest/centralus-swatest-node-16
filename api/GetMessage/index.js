module.exports = async function (context, req) {
  const date = "2024-06-17T20:08:41.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

