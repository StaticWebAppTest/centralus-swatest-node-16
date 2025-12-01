module.exports = async function (context, req) {
  const date = "2025-12-01T23:13:32.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

