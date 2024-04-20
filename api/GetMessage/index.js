module.exports = async function (context, req) {
  const date = "2024-04-20T00:42:55.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

