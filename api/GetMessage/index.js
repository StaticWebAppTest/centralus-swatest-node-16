module.exports = async function (context, req) {
  const date = "2025-12-27T23:13:33.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

