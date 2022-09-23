module.exports = async function (context, req) {
  const date = "2022-09-23T19:13:30.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

