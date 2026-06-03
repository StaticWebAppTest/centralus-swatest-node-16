module.exports = async function (context, req) {
  const date = "2026-06-03T19:42:25.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

