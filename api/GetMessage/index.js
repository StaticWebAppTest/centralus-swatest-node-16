module.exports = async function (context, req) {
  const date = "2022-10-19T20:14:24.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

