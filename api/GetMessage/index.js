module.exports = async function (context, req) {
  const date = "2025-01-10T17:10:12.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

