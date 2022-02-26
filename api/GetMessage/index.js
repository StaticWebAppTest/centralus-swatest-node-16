module.exports = async function (context, req) {
  const date = "2022-02-26T03:10:11.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

