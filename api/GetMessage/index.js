module.exports = async function (context, req) {
  const date = "2022-07-07T06:13:21.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

