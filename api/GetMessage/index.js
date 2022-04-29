module.exports = async function (context, req) {
  const date = "2022-04-29T10:10:42.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

