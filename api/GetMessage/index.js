module.exports = async function (context, req) {
  const date = "2022-04-26T07:11:00.912Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

