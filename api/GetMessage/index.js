module.exports = async function (context, req) {
  const date = "2025-05-12T10:15:22.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

