module.exports = async function (context, req) {
  const date = "2026-05-09T21:36:32.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

