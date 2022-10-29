module.exports = async function (context, req) {
  const date = "2022-10-29T00:58:59.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

