module.exports = async function (context, req) {
  const date = "2025-06-15T19:10:12.272Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

