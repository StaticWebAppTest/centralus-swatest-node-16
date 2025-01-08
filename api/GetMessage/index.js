module.exports = async function (context, req) {
  const date = "2025-01-08T03:16:24.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

