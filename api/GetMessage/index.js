module.exports = async function (context, req) {
  const date = "2026-07-26T19:03:34.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

