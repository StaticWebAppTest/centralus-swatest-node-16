module.exports = async function (context, req) {
  const date = "2023-03-21T07:08:41.943Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

