module.exports = async function (context, req) {
  const date = "2026-04-21T01:58:58.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

