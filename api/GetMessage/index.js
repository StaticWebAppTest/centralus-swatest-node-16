module.exports = async function (context, req) {
  const date = "2025-02-13T15:12:56.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

