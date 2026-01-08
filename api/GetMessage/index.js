module.exports = async function (context, req) {
  const date = "2026-01-08T23:13:16.144Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

