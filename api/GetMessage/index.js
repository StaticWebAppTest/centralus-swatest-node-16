module.exports = async function (context, req) {
  const date = "2025-10-17T03:31:48.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

