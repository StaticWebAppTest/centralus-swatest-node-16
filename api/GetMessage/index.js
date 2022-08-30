module.exports = async function (context, req) {
  const date = "2022-08-30T04:13:06.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

