module.exports = async function (context, req) {
  const date = "2022-08-07T18:13:14.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

