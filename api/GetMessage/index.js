module.exports = async function (context, req) {
  const date = "2023-11-18T19:06:34.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

