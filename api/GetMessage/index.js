module.exports = async function (context, req) {
  const date = "2022-08-29T04:05:03.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

