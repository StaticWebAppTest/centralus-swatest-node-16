module.exports = async function (context, req) {
  const date = "2022-08-08T15:11:49.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

