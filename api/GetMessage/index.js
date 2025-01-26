module.exports = async function (context, req) {
  const date = "2025-01-26T21:09:49.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

