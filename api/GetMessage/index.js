module.exports = async function (context, req) {
  const date = "2022-09-20T08:17:15.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

