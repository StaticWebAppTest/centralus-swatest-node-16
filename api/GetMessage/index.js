module.exports = async function (context, req) {
  const date = "2025-02-08T15:10:10.134Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

