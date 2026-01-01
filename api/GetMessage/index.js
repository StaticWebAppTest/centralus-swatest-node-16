module.exports = async function (context, req) {
  const date = "2026-01-01T06:23:57.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

