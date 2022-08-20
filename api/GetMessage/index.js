module.exports = async function (context, req) {
  const date = "2022-08-20T06:13:11.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

