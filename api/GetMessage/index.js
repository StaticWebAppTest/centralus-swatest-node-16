module.exports = async function (context, req) {
  const date = "2025-07-29T12:30:56.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

