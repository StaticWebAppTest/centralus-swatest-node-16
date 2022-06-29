module.exports = async function (context, req) {
  const date = "2022-06-29T14:09:14.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

