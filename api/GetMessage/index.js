module.exports = async function (context, req) {
  const date = "2022-11-20T04:15:40.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

