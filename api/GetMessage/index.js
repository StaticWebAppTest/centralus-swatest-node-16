module.exports = async function (context, req) {
  const date = "2026-01-08T22:14:59.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

