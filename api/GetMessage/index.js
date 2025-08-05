module.exports = async function (context, req) {
  const date = "2025-08-05T12:31:38.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

