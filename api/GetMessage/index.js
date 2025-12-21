module.exports = async function (context, req) {
  const date = "2025-12-21T20:14:56.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

