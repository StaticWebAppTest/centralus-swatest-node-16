module.exports = async function (context, req) {
  const date = "2025-11-22T10:13:14.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

