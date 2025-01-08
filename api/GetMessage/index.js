module.exports = async function (context, req) {
  const date = "2025-01-08T12:23:05.554Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

