module.exports = async function (context, req) {
  const date = "2026-07-17T20:04:28.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

