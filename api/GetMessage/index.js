module.exports = async function (context, req) {
  const date = "2025-12-01T19:16:06.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

