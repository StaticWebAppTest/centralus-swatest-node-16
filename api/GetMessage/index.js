module.exports = async function (context, req) {
  const date = "2022-12-26T04:11:31.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

