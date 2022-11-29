module.exports = async function (context, req) {
  const date = "2022-11-29T18:12:41.664Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

