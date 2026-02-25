module.exports = async function (context, req) {
  const date = "2026-02-25T11:35:17.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

