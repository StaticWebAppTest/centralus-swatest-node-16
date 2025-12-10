module.exports = async function (context, req) {
  const date = "2025-12-10T10:16:49.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

