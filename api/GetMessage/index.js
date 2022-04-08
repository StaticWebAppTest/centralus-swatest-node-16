module.exports = async function (context, req) {
  const date = "2022-04-08T18:13:17.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

