module.exports = async function (context, req) {
  const date = "2025-12-05T11:13:27.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

