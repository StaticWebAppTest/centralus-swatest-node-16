module.exports = async function (context, req) {
  const date = "2022-07-07T12:22:14.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

