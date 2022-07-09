module.exports = async function (context, req) {
  const date = "2022-07-09T15:11:10.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

