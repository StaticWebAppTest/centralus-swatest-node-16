module.exports = async function (context, req) {
  const date = "2025-09-05T16:15:40.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

