module.exports = async function (context, req) {
  const date = "2022-04-27T05:23:14.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

