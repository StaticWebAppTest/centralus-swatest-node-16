module.exports = async function (context, req) {
  const date = "2025-02-20T17:10:54.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

