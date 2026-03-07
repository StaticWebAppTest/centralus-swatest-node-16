module.exports = async function (context, req) {
  const date = "2026-03-07T22:16:10.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

