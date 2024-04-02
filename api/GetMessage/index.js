module.exports = async function (context, req) {
  const date = "2024-04-02T00:43:36.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

