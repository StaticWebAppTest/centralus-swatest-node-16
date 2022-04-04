module.exports = async function (context, req) {
  const date = "2022-04-04T16:14:51.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

