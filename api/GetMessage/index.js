module.exports = async function (context, req) {
  const date = "2025-01-29T20:12:25.864Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

