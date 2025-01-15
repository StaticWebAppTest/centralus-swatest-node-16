module.exports = async function (context, req) {
  const date = "2025-01-15T12:21:58.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

