module.exports = async function (context, req) {
  const date = "2025-02-20T02:15:27.439Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

