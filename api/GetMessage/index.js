module.exports = async function (context, req) {
  const date = "2022-06-06T12:21:26.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

