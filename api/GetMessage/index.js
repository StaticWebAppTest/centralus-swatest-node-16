module.exports = async function (context, req) {
  const date = "2025-11-01T19:08:49.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

