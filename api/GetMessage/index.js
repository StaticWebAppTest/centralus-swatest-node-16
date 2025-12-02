module.exports = async function (context, req) {
  const date = "2025-12-02T03:13:16.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

