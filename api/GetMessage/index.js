module.exports = async function (context, req) {
  const date = "2025-02-13T12:22:49.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

