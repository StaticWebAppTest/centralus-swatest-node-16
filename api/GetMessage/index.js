module.exports = async function (context, req) {
  const date = "2024-07-03T15:10:53.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

