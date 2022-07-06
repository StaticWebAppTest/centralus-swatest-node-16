module.exports = async function (context, req) {
  const date = "2022-07-06T11:09:48.134Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

