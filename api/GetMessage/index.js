module.exports = async function (context, req) {
  const date = "2025-02-26T20:13:22.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

