module.exports = async function (context, req) {
  const date = "2024-01-31T00:41:39.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

