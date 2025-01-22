module.exports = async function (context, req) {
  const date = "2025-01-22T04:14:06.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

