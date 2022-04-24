module.exports = async function (context, req) {
  const date = "2022-04-24T04:13:14.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

