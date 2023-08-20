module.exports = async function (context, req) {
  const date = "2023-08-20T02:12:48.168Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

