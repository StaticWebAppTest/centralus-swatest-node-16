module.exports = async function (context, req) {
  const date = "2025-12-03T17:17:41.083Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

