module.exports = async function (context, req) {
  const date = "2022-07-26T03:59:35.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

