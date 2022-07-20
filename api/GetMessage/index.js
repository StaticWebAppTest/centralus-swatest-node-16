module.exports = async function (context, req) {
  const date = "2022-07-20T04:33:37.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

