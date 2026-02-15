module.exports = async function (context, req) {
  const date = "2026-02-15T04:15:03.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

