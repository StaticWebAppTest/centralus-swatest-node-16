module.exports = async function (context, req) {
  const date = "2025-01-18T12:19:25.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

