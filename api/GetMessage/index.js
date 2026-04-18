module.exports = async function (context, req) {
  const date = "2026-04-18T09:40:29.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

