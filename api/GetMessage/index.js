module.exports = async function (context, req) {
  const date = "2026-03-21T15:19:14.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

