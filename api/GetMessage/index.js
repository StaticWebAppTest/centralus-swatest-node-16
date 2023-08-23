module.exports = async function (context, req) {
  const date = "2023-08-23T16:11:06.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

