module.exports = async function (context, req) {
  const date = "2022-12-07T19:07:35.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

