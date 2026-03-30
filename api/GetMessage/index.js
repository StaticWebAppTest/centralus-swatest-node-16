module.exports = async function (context, req) {
  const date = "2026-03-30T17:47:58.492Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

