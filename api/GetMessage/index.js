module.exports = async function (context, req) {
  const date = "2025-01-23T19:08:54.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

