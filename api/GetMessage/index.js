module.exports = async function (context, req) {
  const date = "2023-12-29T15:08:41.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

