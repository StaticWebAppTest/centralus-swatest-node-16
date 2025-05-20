module.exports = async function (context, req) {
  const date = "2025-05-20T10:14:56.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

