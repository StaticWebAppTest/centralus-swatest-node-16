module.exports = async function (context, req) {
  const date = "2026-04-29T12:12:03.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

