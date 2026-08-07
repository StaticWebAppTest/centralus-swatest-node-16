module.exports = async function (context, req) {
  const date = "2026-08-07T18:43:20.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

