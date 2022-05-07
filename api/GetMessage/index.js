module.exports = async function (context, req) {
  const date = "2022-05-07T19:09:55.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

