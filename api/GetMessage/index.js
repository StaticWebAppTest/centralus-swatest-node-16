module.exports = async function (context, req) {
  const date = "2026-05-13T02:33:11.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

