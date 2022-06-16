module.exports = async function (context, req) {
  const date = "2022-06-16T05:13:51.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

