module.exports = async function (context, req) {
  const date = "2022-05-16T17:17:51.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

