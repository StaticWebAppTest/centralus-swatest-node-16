module.exports = async function (context, req) {
  const date = "2025-02-08T12:20:00.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

