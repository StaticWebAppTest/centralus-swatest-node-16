module.exports = async function (context, req) {
  const date = "2025-01-27T20:12:54.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

