module.exports = async function (context, req) {
  const date = "2025-06-01T18:17:04.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

