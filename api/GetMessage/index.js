module.exports = async function (context, req) {
  const date = "2022-11-26T19:07:49.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

