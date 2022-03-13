module.exports = async function (context, req) {
  const date = "2022-03-13T05:12:41.324Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

