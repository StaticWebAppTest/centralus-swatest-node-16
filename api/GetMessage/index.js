module.exports = async function (context, req) {
  const date = "2025-05-20T20:14:58.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

