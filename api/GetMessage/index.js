module.exports = async function (context, req) {
  const date = "2026-03-31T23:27:30.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

