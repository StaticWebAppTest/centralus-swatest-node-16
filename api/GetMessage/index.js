module.exports = async function (context, req) {
  const date = "2025-12-31T17:12:42.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

