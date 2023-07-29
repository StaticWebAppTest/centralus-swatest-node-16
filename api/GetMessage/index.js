module.exports = async function (context, req) {
  const date = "2023-07-29T04:09:41.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

