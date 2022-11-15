module.exports = async function (context, req) {
  const date = "2022-11-15T09:11:21.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

