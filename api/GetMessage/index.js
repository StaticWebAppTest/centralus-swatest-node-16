module.exports = async function (context, req) {
  const date = "2024-04-04T00:43:53.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

