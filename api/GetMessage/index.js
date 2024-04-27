module.exports = async function (context, req) {
  const date = "2024-04-27T01:43:16.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

