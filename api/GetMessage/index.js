module.exports = async function (context, req) {
  const date = "2025-08-20T12:27:24.649Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

