module.exports = async function (context, req) {
  const date = "2022-11-05T23:11:41.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

