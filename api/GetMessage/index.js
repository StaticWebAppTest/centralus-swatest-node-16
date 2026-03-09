module.exports = async function (context, req) {
  const date = "2026-03-09T10:38:33.938Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

