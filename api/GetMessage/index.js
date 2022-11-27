module.exports = async function (context, req) {
  const date = "2022-11-27T02:39:31.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

