module.exports = async function (context, req) {
  const date = "2025-01-21T06:16:29.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

