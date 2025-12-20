module.exports = async function (context, req) {
  const date = "2025-12-20T13:22:35.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

