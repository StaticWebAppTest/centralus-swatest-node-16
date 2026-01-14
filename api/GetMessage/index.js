module.exports = async function (context, req) {
  const date = "2026-01-14T14:19:31.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

