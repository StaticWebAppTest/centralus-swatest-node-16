module.exports = async function (context, req) {
  const date = "2022-04-10T04:12:32.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

