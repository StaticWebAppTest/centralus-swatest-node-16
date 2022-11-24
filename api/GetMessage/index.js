module.exports = async function (context, req) {
  const date = "2022-11-24T23:10:58.202Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

