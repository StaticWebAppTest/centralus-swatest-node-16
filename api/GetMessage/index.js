module.exports = async function (context, req) {
  const date = "2025-06-20T12:27:41.083Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

