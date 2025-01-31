module.exports = async function (context, req) {
  const date = "2025-01-31T08:14:31.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

