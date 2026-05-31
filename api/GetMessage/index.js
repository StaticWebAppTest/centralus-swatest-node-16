module.exports = async function (context, req) {
  const date = "2026-05-31T02:56:32.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

