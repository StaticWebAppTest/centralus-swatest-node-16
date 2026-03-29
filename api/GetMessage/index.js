module.exports = async function (context, req) {
  const date = "2026-03-29T20:23:41.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

