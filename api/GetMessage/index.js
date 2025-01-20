module.exports = async function (context, req) {
  const date = "2025-01-20T12:22:11.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

