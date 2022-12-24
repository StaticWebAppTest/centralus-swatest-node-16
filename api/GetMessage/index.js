module.exports = async function (context, req) {
  const date = "2022-12-24T03:10:10.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

