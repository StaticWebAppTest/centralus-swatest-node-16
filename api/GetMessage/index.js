module.exports = async function (context, req) {
  const date = "2025-05-20T13:27:47.049Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

