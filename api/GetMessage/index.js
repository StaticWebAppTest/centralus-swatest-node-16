module.exports = async function (context, req) {
  const date = "2023-04-17T04:11:19.513Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

