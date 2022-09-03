module.exports = async function (context, req) {
  const date = "2022-09-03T01:01:28.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

