module.exports = async function (context, req) {
  const date = "2026-04-25T22:29:32.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

