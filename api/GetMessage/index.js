module.exports = async function (context, req) {
  const date = "2022-08-23T15:11:13.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

