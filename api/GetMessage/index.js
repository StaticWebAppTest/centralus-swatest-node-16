module.exports = async function (context, req) {
  const date = "2026-05-22T18:48:58.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

