module.exports = async function (context, req) {
  const date = "2022-10-21T05:50:41.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

