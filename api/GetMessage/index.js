module.exports = async function (context, req) {
  const date = "2026-04-05T20:24:47.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

