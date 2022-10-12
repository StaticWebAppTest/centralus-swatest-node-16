module.exports = async function (context, req) {
  const date = "2022-10-12T04:01:53.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

