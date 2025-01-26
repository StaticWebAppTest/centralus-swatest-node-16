module.exports = async function (context, req) {
  const date = "2025-01-26T16:12:29.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

