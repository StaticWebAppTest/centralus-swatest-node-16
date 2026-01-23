module.exports = async function (context, req) {
  const date = "2026-01-23T16:21:21.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

