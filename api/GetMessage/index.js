module.exports = async function (context, req) {
  const date = "2024-03-01T02:19:48.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

