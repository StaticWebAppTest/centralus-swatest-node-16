module.exports = async function (context, req) {
  const date = "2026-03-21T05:07:36.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

