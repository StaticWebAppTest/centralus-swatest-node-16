module.exports = async function (context, req) {
  const date = "2022-12-19T04:11:15.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

