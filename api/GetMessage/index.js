module.exports = async function (context, req) {
  const date = "2025-03-22T06:16:06.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

