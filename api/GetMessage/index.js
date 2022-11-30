module.exports = async function (context, req) {
  const date = "2022-11-30T19:08:41.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

