module.exports = async function (context, req) {
  const date = "2025-12-29T12:31:28.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

