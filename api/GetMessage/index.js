module.exports = async function (context, req) {
  const date = "2025-05-01T13:22:12.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

