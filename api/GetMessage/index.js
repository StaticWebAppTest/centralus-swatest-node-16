module.exports = async function (context, req) {
  const date = "2026-04-04T15:24:57.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

