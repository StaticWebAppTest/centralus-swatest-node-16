module.exports = async function (context, req) {
  const date = "2022-08-29T14:12:38.030Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

