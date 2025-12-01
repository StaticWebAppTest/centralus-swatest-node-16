module.exports = async function (context, req) {
  const date = "2025-12-01T10:17:06.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

