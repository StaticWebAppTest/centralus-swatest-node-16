module.exports = async function (context, req) {
  const date = "2025-05-12T16:16:58.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

