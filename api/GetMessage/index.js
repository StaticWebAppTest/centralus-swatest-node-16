module.exports = async function (context, req) {
  const date = "2025-11-20T12:28:28.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

