module.exports = async function (context, req) {
  const date = "2022-08-22T08:14:26.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

