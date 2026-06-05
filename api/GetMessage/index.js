module.exports = async function (context, req) {
  const date = "2026-06-05T23:00:07.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

