module.exports = async function (context, req) {
  const date = "2025-05-13T12:27:34.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

