module.exports = async function (context, req) {
  const date = "2026-07-25T20:08:34.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

