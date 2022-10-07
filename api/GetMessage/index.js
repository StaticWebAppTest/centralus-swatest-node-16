module.exports = async function (context, req) {
  const date = "2022-10-07T03:43:58.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

