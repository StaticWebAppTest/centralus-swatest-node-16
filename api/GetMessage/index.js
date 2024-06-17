module.exports = async function (context, req) {
  const date = "2024-06-17T00:49:47.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

