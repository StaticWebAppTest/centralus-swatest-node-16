module.exports = async function (context, req) {
  const date = "2025-12-26T12:28:59.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

