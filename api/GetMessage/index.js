module.exports = async function (context, req) {
  const date = "2022-04-07T16:14:02.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

