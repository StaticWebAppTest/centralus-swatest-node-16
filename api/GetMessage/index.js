module.exports = async function (context, req) {
  const date = "2022-10-13T19:18:26.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

