module.exports = async function (context, req) {
  const date = "2024-07-09T23:11:36.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

