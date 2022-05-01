module.exports = async function (context, req) {
  const date = "2022-05-01T04:29:25.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

