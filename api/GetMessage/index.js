module.exports = async function (context, req) {
  const date = "2022-08-05T23:10:41.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

