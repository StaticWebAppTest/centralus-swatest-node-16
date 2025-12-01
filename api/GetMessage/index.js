module.exports = async function (context, req) {
  const date = "2025-12-01T12:30:27.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

