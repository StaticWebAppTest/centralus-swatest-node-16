module.exports = async function (context, req) {
  const date = "2023-02-07T04:11:44.585Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

