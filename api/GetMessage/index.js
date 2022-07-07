module.exports = async function (context, req) {
  const date = "2022-07-07T21:09:29.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

