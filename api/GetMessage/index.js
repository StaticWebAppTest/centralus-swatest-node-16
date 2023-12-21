module.exports = async function (context, req) {
  const date = "2023-12-21T02:21:41.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

