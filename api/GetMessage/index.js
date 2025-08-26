module.exports = async function (context, req) {
  const date = "2025-08-26T20:14:25.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

