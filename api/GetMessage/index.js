module.exports = async function (context, req) {
  const date = "2022-08-18T15:20:31.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

