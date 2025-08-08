module.exports = async function (context, req) {
  const date = "2025-08-08T14:17:12.272Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

