module.exports = async function (context, req) {
  const date = "2022-04-29T17:16:20.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

