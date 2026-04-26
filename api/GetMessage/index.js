module.exports = async function (context, req) {
  const date = "2026-04-26T05:32:13.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

