module.exports = async function (context, req) {
  const date = "2025-05-25T18:16:19.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

