module.exports = async function (context, req) {
  const date = "2026-03-30T22:27:58.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

