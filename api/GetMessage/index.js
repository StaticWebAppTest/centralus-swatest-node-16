module.exports = async function (context, req) {
  const date = "2026-07-12T22:39:36.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

