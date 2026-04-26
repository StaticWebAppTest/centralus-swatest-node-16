module.exports = async function (context, req) {
  const date = "2026-04-26T14:00:44.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

