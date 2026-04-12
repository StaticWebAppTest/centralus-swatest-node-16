module.exports = async function (context, req) {
  const date = "2026-04-12T22:26:30.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

