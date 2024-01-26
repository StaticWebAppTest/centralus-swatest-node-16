module.exports = async function (context, req) {
  const date = "2024-01-26T02:17:32.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

