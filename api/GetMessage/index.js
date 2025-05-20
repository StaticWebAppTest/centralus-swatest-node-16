module.exports = async function (context, req) {
  const date = "2025-05-20T12:27:44.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

