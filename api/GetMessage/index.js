module.exports = async function (context, req) {
  const date = "2024-08-21T08:14:10.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

