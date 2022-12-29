module.exports = async function (context, req) {
  const date = "2022-12-29T00:49:51.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

