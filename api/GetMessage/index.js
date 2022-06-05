module.exports = async function (context, req) {
  const date = "2022-06-05T02:50:41.560Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

