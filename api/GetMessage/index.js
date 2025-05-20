module.exports = async function (context, req) {
  const date = "2025-05-20T18:18:36.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

