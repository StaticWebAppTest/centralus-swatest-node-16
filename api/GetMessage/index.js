module.exports = async function (context, req) {
  const date = "2025-05-05T03:08:28.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

