module.exports = async function (context, req) {
  const date = "2025-01-01T05:11:43.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

