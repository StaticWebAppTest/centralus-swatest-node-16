module.exports = async function (context, req) {
  const date = "2024-03-03T16:09:42.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

