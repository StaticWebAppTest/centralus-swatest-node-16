module.exports = async function (context, req) {
  const date = "2022-07-25T04:41:20.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

