module.exports = async function (context, req) {
  const date = "2022-08-09T18:13:01.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

