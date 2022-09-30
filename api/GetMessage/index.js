module.exports = async function (context, req) {
  const date = "2022-09-30T09:21:38.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

