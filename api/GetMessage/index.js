module.exports = async function (context, req) {
  const date = "2022-10-07T19:15:39.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

