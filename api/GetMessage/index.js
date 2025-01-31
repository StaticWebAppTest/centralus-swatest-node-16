module.exports = async function (context, req) {
  const date = "2025-01-31T21:10:13.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

