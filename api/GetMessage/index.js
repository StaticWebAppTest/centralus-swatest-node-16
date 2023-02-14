module.exports = async function (context, req) {
  const date = "2023-02-14T02:19:41.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

