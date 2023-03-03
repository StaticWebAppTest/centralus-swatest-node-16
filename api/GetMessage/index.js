module.exports = async function (context, req) {
  const date = "2023-03-03T11:08:27.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

