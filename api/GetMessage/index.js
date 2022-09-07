module.exports = async function (context, req) {
  const date = "2022-09-07T22:11:35.179Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

