module.exports = async function (context, req) {
  const date = "2025-05-08T10:14:48.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

