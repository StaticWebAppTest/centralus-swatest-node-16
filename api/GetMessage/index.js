module.exports = async function (context, req) {
  const date = "2024-04-30T15:08:00.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

