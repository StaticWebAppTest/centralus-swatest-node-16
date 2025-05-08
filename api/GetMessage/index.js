module.exports = async function (context, req) {
  const date = "2025-05-08T09:14:05.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

