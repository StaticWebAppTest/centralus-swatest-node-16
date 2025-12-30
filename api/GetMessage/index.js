module.exports = async function (context, req) {
  const date = "2025-12-30T15:15:34.008Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

