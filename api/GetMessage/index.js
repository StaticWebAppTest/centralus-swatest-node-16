module.exports = async function (context, req) {
  const date = "2026-09-06T16:37:36.742Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

