module.exports = async function (context, req) {
  const date = "2022-04-29T02:59:31.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

