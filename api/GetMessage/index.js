module.exports = async function (context, req) {
  const date = "2025-03-20T14:12:32.008Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

