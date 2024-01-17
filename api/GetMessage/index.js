module.exports = async function (context, req) {
  const date = "2024-01-17T12:17:46.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

