module.exports = async function (context, req) {
  const date = "2023-01-29T12:16:08.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

