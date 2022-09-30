module.exports = async function (context, req) {
  const date = "2022-09-30T19:15:15.610Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

