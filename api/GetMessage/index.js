module.exports = async function (context, req) {
  const date = "2025-06-05T09:14:47.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

