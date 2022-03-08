module.exports = async function (context, req) {
  const date = "2022-03-08T02:04:54.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

