module.exports = async function (context, req) {
  const date = "2026-01-15T06:24:31.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

