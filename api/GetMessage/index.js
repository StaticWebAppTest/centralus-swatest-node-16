module.exports = async function (context, req) {
  const date = "2026-04-20T09:51:58.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

