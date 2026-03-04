module.exports = async function (context, req) {
  const date = "2026-03-04T20:25:36.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

