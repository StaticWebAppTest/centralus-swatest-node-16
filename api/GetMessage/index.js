module.exports = async function (context, req) {
  const date = "2022-05-22T16:14:06.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

