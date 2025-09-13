module.exports = async function (context, req) {
  const date = "2025-09-13T10:11:26.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

