module.exports = async function (context, req) {
  const date = "2026-04-03T23:27:32.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

