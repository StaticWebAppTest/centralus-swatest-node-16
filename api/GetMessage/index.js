module.exports = async function (context, req) {
  const date = "2022-04-26T16:14:40.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

