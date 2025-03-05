module.exports = async function (context, req) {
  const date = "2025-03-05T04:15:14.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

