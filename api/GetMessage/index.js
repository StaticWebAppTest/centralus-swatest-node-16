module.exports = async function (context, req) {
  const date = "2024-11-02T19:09:59.846Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

