module.exports = async function (context, req) {
  const date = "2025-01-20T00:56:33.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

