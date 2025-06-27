module.exports = async function (context, req) {
  const date = "2025-06-27T13:26:19.049Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

