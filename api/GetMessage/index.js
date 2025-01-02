module.exports = async function (context, req) {
  const date = "2025-01-02T21:10:36.630Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

