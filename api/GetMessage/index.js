module.exports = async function (context, req) {
  const date = "2022-08-29T16:14:50.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

