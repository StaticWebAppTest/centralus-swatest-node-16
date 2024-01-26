module.exports = async function (context, req) {
  const date = "2024-01-26T00:41:53.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

