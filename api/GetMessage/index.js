module.exports = async function (context, req) {
  const date = "2026-04-21T10:14:05.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

