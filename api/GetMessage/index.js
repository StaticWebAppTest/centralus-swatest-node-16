module.exports = async function (context, req) {
  const date = "2026-03-01T06:37:18.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

