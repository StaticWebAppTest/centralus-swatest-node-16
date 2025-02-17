module.exports = async function (context, req) {
  const date = "2025-02-17T03:18:29.869Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

