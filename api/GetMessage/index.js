module.exports = async function (context, req) {
  const date = "2025-05-08T16:16:46.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

