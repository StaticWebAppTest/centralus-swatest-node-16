module.exports = async function (context, req) {
  const date = "2022-07-02T05:13:41.432Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

