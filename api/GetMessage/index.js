module.exports = async function (context, req) {
  const date = "2022-06-03T02:47:15.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

