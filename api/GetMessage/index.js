module.exports = async function (context, req) {
  const date = "2024-12-01T03:10:47.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

