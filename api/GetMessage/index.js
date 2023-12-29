module.exports = async function (context, req) {
  const date = "2023-12-29T08:11:41.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

