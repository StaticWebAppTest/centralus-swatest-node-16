module.exports = async function (context, req) {
  const date = "2022-12-17T02:04:06.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

