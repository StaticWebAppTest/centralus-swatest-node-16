module.exports = async function (context, req) {
  const date = "2023-12-08T04:11:26.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

