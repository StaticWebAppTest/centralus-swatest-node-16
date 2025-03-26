module.exports = async function (context, req) {
  const date = "2025-03-26T16:16:42.208Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

