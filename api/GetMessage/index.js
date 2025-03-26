module.exports = async function (context, req) {
  const date = "2025-03-26T10:13:28.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

