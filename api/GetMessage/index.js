module.exports = async function (context, req) {
  const date = "2022-02-28T02:01:09.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

