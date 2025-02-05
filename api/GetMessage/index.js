module.exports = async function (context, req) {
  const date = "2025-02-05T20:13:24.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

