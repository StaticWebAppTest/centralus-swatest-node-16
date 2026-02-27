module.exports = async function (context, req) {
  const date = "2026-02-27T08:33:32.867Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

