module.exports = async function (context, req) {
  const date = "2022-06-04T09:10:31.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

