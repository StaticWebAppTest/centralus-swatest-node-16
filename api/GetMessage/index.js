module.exports = async function (context, req) {
  const date = "2022-07-27T21:09:29.642Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

