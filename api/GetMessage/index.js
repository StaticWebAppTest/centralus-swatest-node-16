module.exports = async function (context, req) {
  const date = "2025-02-21T04:15:29.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

