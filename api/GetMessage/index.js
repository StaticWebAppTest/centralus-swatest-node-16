module.exports = async function (context, req) {
  const date = "2026-04-13T11:11:49.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

