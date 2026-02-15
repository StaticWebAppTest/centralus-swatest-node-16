module.exports = async function (context, req) {
  const date = "2026-02-15T11:17:04.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

