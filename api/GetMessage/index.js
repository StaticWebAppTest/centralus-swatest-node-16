module.exports = async function (context, req) {
  const date = "2022-05-02T08:14:41.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

