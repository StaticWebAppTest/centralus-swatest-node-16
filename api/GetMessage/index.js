module.exports = async function (context, req) {
  const date = "2026-04-07T22:31:50.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

