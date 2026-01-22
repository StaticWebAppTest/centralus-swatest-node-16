module.exports = async function (context, req) {
  const date = "2026-01-22T07:21:55.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

