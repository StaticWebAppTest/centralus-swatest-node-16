module.exports = async function (context, req) {
  const date = "2026-04-25T11:33:26.620Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

