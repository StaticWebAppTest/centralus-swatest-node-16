module.exports = async function (context, req) {
  const date = "2022-10-22T06:21:32.168Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

