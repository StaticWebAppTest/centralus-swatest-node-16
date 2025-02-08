module.exports = async function (context, req) {
  const date = "2025-02-08T10:10:54.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

