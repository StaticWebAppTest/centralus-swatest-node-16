module.exports = async function (context, req) {
  const date = "2026-11-11T15:45:04.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

