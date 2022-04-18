module.exports = async function (context, req) {
  const date = "2022-04-18T02:53:23.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

