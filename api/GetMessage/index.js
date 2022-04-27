module.exports = async function (context, req) {
  const date = "2022-04-27T08:13:41.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

