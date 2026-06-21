module.exports = async function (context, req) {
  const date = "2026-06-21T00:14:26.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

