module.exports = async function (context, req) {
  const date = "2026-08-25T06:33:54.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

