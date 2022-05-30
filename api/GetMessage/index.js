module.exports = async function (context, req) {
  const date = "2022-05-30T12:20:52.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

