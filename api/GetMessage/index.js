module.exports = async function (context, req) {
  const date = "2025-02-21T03:17:28.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

