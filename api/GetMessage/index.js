module.exports = async function (context, req) {
  const date = "2025-01-12T18:14:27.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

