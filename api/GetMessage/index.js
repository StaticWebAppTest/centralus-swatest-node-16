module.exports = async function (context, req) {
  const date = "2025-01-07T03:18:55.945Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

