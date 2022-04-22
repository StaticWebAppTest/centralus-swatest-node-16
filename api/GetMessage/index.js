module.exports = async function (context, req) {
  const date = "2022-04-22T04:38:40.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

