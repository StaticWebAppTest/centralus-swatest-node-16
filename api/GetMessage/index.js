module.exports = async function (context, req) {
  const date = "2025-01-26T19:08:50.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

