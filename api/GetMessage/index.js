module.exports = async function (context, req) {
  const date = "2023-12-06T17:08:41.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

