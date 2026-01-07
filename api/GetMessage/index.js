module.exports = async function (context, req) {
  const date = "2026-01-07T07:20:13.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

