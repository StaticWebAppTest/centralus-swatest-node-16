module.exports = async function (context, req) {
  const date = "2025-08-16T10:12:48.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

