module.exports = async function (context, req) {
  const date = "2025-01-05T12:20:29.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

