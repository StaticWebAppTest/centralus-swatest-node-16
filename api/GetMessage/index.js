module.exports = async function (context, req) {
  const date = "2022-11-30T12:20:55.729Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

