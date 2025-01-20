module.exports = async function (context, req) {
  const date = "2025-01-20T04:14:37.786Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

