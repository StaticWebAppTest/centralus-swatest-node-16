module.exports = async function (context, req) {
  const date = "2025-12-03T05:14:16.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

