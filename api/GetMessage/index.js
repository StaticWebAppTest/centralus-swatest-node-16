module.exports = async function (context, req) {
  const date = "2022-04-01T06:13:32.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

