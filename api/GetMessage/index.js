module.exports = async function (context, req) {
  const date = "2026-01-05T10:18:10.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

