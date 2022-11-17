module.exports = async function (context, req) {
  const date = "2022-11-17T04:13:47.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

