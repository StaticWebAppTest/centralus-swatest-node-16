module.exports = async function (context, req) {
  const date = "2022-09-30T08:24:05.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

