module.exports = async function (context, req) {
  const date = "2025-01-22T06:16:39.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

