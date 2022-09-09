module.exports = async function (context, req) {
  const date = "2022-09-09T21:10:54.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

