module.exports = async function (context, req) {
  const date = "2026-02-22T11:15:23.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

