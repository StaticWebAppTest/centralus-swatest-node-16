module.exports = async function (context, req) {
  const date = "2026-05-25T20:58:22.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

