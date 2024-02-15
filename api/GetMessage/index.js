module.exports = async function (context, req) {
  const date = "2024-02-15T17:08:58.846Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

