module.exports = async function (context, req) {
  const date = "2025-12-21T06:21:29.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

